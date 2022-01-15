import * as React from 'react';

type SelectedNodeContextState = {
  selectedNode: string;
  setSelectedNode: React.Dispatch<React.SetStateAction<string>>;
};

const SelectedNodeContext = React.createContext<
  SelectedNodeContextState | undefined
>(undefined);
SelectedNodeContext.displayName = 'SelectedNodeContext';

export default function SelectedNodeProvider({
  children,
}: AppProps): React.ReactElement {
  const [selectedNode, setSelectedNode] = React.useState<string>('');

  const value = { selectedNode, setSelectedNode };

  return (
    <SelectedNodeContext.Provider value={value}>
      {children}
    </SelectedNodeContext.Provider>
  );
}

export function useSelectedNodeContext(): SelectedNodeContextState {
  const selectedNode = React.useContext(SelectedNodeContext);

  if (!selectedNode) {
    throw new Error('Hook needs to be used inside SelectedNodeContext');
  }

  return selectedNode;
}
