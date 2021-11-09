import * as React from "react";

import TreeNode from "./TreeNode";

interface TreeContainerProps {
  tree?: TreeNode[];
  level?: number;
}

export default function TreeContainer(props: TreeContainerProps) {
  const { tree, level = 0 } = props;

  return (
    <div className="levelWrapper">
      {tree &&
        tree.map((node) => (
          <div key={node.name} className="parentWrapper">
            <TreeNode node={node} level={level} />
            <TreeContainer tree={node.allChildren} level={level + 1} />
          </div>
        ))}
    </div>
  );
}
