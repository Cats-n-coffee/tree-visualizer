import { useSelectedNodeContext } from 'context/SelectedNodeContext';
import * as React from 'react';

interface TreeNodeProps {
  node: TreeNode;
  level: number;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TreeNode(props: TreeNodeProps): React.ReactElement {
  const { node, level, setShowDelete } = props;
  const { setSelectedNode } = useSelectedNodeContext();
  const [showActions, setShowActions] = React.useState<boolean>(false);

  function handleConfirmation() {
    setSelectedNode(node.name);
    setShowDelete(true);
  }

  return (
    <article
      className="node"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <h3>{node.name}</h3>
      {showActions && (
        <div>
          <button onClick={() => console.log('edit', node.name)}>Edit</button>
          <button onClick={handleConfirmation}>Delete</button>
        </div>
      )}
    </article>
  );
}
