import * as React from "react";

interface TreeNode {
  name: string;
  props: Array<PropFormValue>;
  state: Array<StateFormValue>;
  parent: string;
  children?: Array<TreeNode>;
}

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

  const value = { tree };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
}

export function useTreeContext() {
  const tree = React.useContext(TreeContext);

  if (!tree) {
    throw new Error("Hook needs to be used inside the TreeContextProvider");
  }

  return tree;
}
