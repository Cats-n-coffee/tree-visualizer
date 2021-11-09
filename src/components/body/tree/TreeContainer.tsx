import * as React from "react";

import TreeNode from "./TreeNode";

interface TreeContainerProps {
  tree?: TreeNode[];
  level?: number;
}

export default function TreeContainer(props: TreeContainerProps) {
  const { tree, level = 0 } = props;

  return (
    <div>
      {tree &&
        tree.map((node) => (
          <div key={node.name}>
            <TreeNode node={node} />
            <TreeContainer tree={node.allChildren} level={level + 1} />
          </div>
        ))}
    </div>
  );
}
