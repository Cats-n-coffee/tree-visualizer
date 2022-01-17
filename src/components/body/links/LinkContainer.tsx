import * as React from 'react';

import { findCurrentNodes, makePath } from '../../../utils/tree/linksHelpers';
import useLinks from '../../../utils/tree/useLinks';

interface LinkContainerProps {
  tree: TreeNode[];
}

export default function LinkContainer(
  props: LinkContainerProps
): React.ReactElement {
  const { tree } = props;
  const [links, setLinks] = React.useState<Array<NodeDOMToArray>>([]);
  const { ref, linkPositions } = useLinks({ links, makePath });

  React.useEffect(() => {
    const currentNodesOnScreen = findCurrentNodes();
    setLinks(currentNodesOnScreen);
  }, [tree]);

  return (
    <svg ref={ref} id="svg-container">
      {linkPositions &&
        linkPositions.length > 0 &&
        linkPositions.map((link, i) => {
          if (!link) return;
          return (
            <path d={link.pathValue} key={i} stroke="black" strokeWidth="2" />
          );
        })}
    </svg>
  );
}
