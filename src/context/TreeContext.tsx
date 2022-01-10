import * as React from 'react';
import { findNodeAndInsert, findNodeAndDelete } from 'utils/tree/nodeHelpers';

// setTree optional, otherwise 'value' prop is missing a property
type TreeContextState = {
  tree: TreeNode[];
  setTree?: React.Dispatch<React.SetStateAction<TreeNode[]>>;
  // eslint-disable-next-line no-unused-vars
  insertNode: (node: TreeNode) => void;
  // eslint-disable-next-line no-unused-vars
  removeNode: (nodeName: string) => void;
};

const TreeContext = React.createContext<TreeContextState | undefined>(
  undefined
);
TreeContext.displayName = 'TreeContext';

export default function TreeContextProvider({
  children,
}: AppProps): React.ReactElement {
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

      // If the parent is null (user did not specify), the parent will be the root node
      if (parentName === null) {
        newNode.parent = rootNode.name;
        parentName = newNode.parent;
      }
      // Helper function to find the correct parent and insert the new child
      const newTree = findNodeAndInsert({
        parentName,
        newNode,
        tree: rootNode,
      });
      setTree(newTree);
    }
  };

  // Removes a node and its children from the correct parent
  const removeNode = (nodeName: string) => {
    const currentTree = tree[0];
    const afterDeletingNode = findNodeAndDelete(nodeName, currentTree);
    setTree(afterDeletingNode);
  };

  const value = { tree, insertNode, removeNode };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
}

export function useTreeContext(): TreeContextState {
  const tree = React.useContext(TreeContext);

  if (!tree) {
    throw new Error('Hook needs to be used inside the TreeContextProvider');
  }

  return tree;
}
