import * as React from 'react';
import {
  findNodeAndInsert,
  findNodeAndDelete,
  findNodeAndEdit,
  findNodeAndRead,
  createNodeNameList,
  createNodeIDs,
} from 'utils/tree/nodeHelpers';

// setTree optional, otherwise 'value' prop is missing a property
type TreeContextState = {
  tree: TreeNode[];
  setTree?: React.Dispatch<React.SetStateAction<TreeNode[]>>;
  // eslint-disable-next-line no-unused-vars
  insertNode: (node: TreeNode) => void;
  // eslint-disable-next-line no-unused-vars
  removeNode: (nodeName: string) => void;
  // eslint-disable-next-line no-unused-vars
  editNode: (nodeName: string, newData: TreeNode) => void;
  // eslint-disable-next-line no-unused-vars
  readNode: (nodeName: string) => TreeNode | string;
  readNodeList: () => string[] | null;
  //readNodeIDs: () => string[];
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
      console.log(newNode);
      createNodeIDs(newNode);
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
      const treeWithIds = createNodeIDs(newTree[0]);
      setTree(treeWithIds);
    }
  };

  // Removes a node and its children from the correct parent
  const removeNode = (nodeName: string) => {
    const currentTree = tree[0];
    const afterDeletingNode = findNodeAndDelete(nodeName, currentTree);
    const newTreeWithIDs = createNodeIDs(afterDeletingNode[0]);
    setTree(newTreeWithIDs);
  };

  const editNode = (nodeName: string, newData: TreeNode) => {
    const currentTree = tree[0];
    const afterEditingNode = findNodeAndEdit(nodeName, newData, currentTree);
    setTree(afterEditingNode);
  };

  const readNode = (nodeName: string) => {
    const currentTree = tree[0];
    const afterReadingTree = findNodeAndRead(nodeName, currentTree);
    return afterReadingTree;
  };

  const readNodeList = () => {
    const currentTree = tree[0];
    const nameList = createNodeNameList(currentTree);
    return nameList;
  };

  // const readNodeIDs = () => {
  //   const currentTree = tree[0];
  //   const IDsList = createNodeIDsList(currentTree);
  //   console.log('id list', IDsList)
  //   //return IDsList;
  // }

  const value = {
    tree,
    insertNode,
    removeNode,
    editNode,
    readNode,
    readNodeList,
  };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
}

export function useTreeContext(): TreeContextState {
  const tree = React.useContext(TreeContext);

  if (!tree) {
    throw new Error('Hook needs to be used inside the TreeContextProvider');
  }

  return tree;
}
