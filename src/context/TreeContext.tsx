import * as React from "react";
import { findNodeAndInsert } from "../utils/tree/nodeHelpers";

// setTree optional, otherwise 'value' prop is missing a property
type TreeContextState = {
  tree: Array<TreeNode>;
  setTree?: React.Dispatch<React.SetStateAction<Array<TreeNode>>>;
};

const treeContextDefault: TreeContextState = {
  tree: [],
  setTree: () => {},
};

const TreeContext = React.createContext<TreeContextState>(treeContextDefault);
TreeContext.displayName = "TreeContext";

export default function TreeContextProvider({ children }: AppProps) {
  const [tree, setTree] = React.useState<TreeNode[]>([]);

  const insertNode = (node: TreeNode) => {
    const newTree = findNodeAndInsert(node, tree);
    console.log("insertNode in context result", newTree);
  };

  const value = { tree, insertNode };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
}

export function useTreeContext() {
  const tree = React.useContext(TreeContext);

  if (!tree) {
    throw new Error("Hook needs to be used inside the TreeContextProvider");
  }

  return tree;
}
