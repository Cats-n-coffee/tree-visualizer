import * as React from 'react';
import { getNodesCoordinates } from './linksHelpers';

interface useLinksReturn {
  ref: React.MutableRefObject<SVGSVGElement | null>;
  linkPositions: (LinkPosition | null)[] | null;
}

interface useLinksProps {
  links: NodeDOMToArray[];
  // eslint-disable-next-line no-unused-vars
  makePath: (start: DOMRect, end: DOMRect) => string;
}

const useLinks = ({ links = [], makePath }: useLinksProps): useLinksReturn => {
  // we must use a reference since we need Node's DOM position
  // https://stackoverflow.com/a/55996413
  const ref = React.useRef<SVGSVGElement | null>(null);
  const [linkPositions, setLinkPositions] =
    React.useState<Array<LinkPosition | null> | null>([]);
  const repositionLinks = React.useCallback(
    () => setLinkPositions(getNodesCoordinates(links, ref.current, makePath)),
    [links, makePath]
  );
  // make sure to reposition links on window resize
  // to make content responsive
  // https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae
  React.useLayoutEffect(() => {
    repositionLinks();
    window.addEventListener('resize', repositionLinks);
    return () => window.removeEventListener('resize', repositionLinks);
  }, [repositionLinks]);

  return { ref, linkPositions };
};

export default useLinks;
