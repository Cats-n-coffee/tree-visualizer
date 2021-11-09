import * as React from "react";
import { findNodeAndInsert } from "../utils/tree/nodeHelpers";

// setTree optional, otherwise 'value' prop is missing a property
type TreeContextState = {
  tree: Array<TreeNode>;
  setTree?: React.Dispatch<React.SetStateAction<Array<TreeNode>>>;
  insertNode: (node: TreeNode) => void;
};

// Default values
const treeContextDefault: TreeContextState = {
  tree: [],
  setTree: () => {},
  insertNode: (node: TreeNode) => {},
};

const TreeContext = React.createContext<TreeContextState>(treeContextDefault);
TreeContext.displayName = "TreeContext";

export default function TreeContextProvider({ children }: AppProps) {
  const [tree, setTree] = React.useState<TreeNode[]>([]);

  // Inserts a node to the correct parent
  const insertNode = (newNode: TreeNode) => {
    if (tree.length === 0) {
      console.log("inside context 0 chidlrem", newNode);
      setTree((oldTree) => [...oldTree, newNode]);
    } else {
      const parentName = newNode.parent;
      const rootNode = tree[0];
      console.log("rootNode", rootNode);
      const newTree = findNodeAndInsert(parentName, newNode, rootNode);
      console.log("insertNode in context result", newTree);
      setTree(newTree);
    }
  };
  console.log("tree is", tree);
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
