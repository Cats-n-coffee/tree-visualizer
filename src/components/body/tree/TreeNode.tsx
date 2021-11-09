import * as React from "react";

interface TreeNodeProps {
  node: TreeNode;
  level: number;
}

export default function TreeNode(props: TreeNodeProps) {
  const { node, level } = props;
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
          <button onClick={() => console.log("edit", node.name)}>Edit</button>
          <button onClick={() => console.log("delete", node.name)}>
            Delete
          </button>
        </div>
      )}
    </article>
  );
}
