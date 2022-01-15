import * as React from 'react';

import TreeNode from './TreeNode';

interface TreeContainerProps {
  tree?: TreeNode[];
  level?: number;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TreeContainer(
  props: TreeContainerProps
): React.ReactElement {
  const { tree, level = 0, setShowDelete } = props;

  return (
    <div className="levelWrapper">
      {tree &&
        tree.map((node) => (
          <div key={node.name} className="parentWrapper">
            <TreeNode node={node} level={level} setShowDelete={setShowDelete} />
            <TreeContainer
              tree={node.allChildren}
              level={level + 1}
              setShowDelete={setShowDelete}
            />
          </div>
        ))}
    </div>
  );
}
