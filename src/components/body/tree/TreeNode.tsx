import * as React from "react";

interface TreeNodeProps {
  node: TreeNode;
}

export default function TreeNode(props: TreeNodeProps) {
  const { node } = props;

  return <div>{node.name}</div>;
}
