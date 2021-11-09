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
    // If the current state of the tree is empty, then it will be the root node
    if (tree.length === 0) {
      setTree((oldTree) => [...oldTree, newNode]);
    } else {
      // If there is already a root node, then we add children to the correct parent
      let parentName = newNode.parent;
      const rootNode = tree[0];

      if (parentName === null) {
        newNode.parent = rootNode.name;
        parentName = newNode.parent;
      }
      const newTree = findNodeAndInsert(parentName, newNode, rootNode);
      setTree(newTree);
    }
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
