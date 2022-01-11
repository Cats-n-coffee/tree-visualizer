import * as React from 'react';

import { useTreeContext } from 'context/TreeContext';

interface TreeNodeProps {
  node: TreeNode;
  level: number;
}

export default function TreeNode(props: TreeNodeProps): React.ReactElement {
  const { node, level } = props;
  const { removeNode } = useTreeContext();
  const [showActions, setShowActions] = React.useState(false);

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
          <button onClick={() => removeNode(node.name)}>Delete</button>
        </div>
      )}
    </article>
  );
}
