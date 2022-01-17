export function makePath(start: DOMRect, end: DOMRect): string {
  // only builds the 'd' attr value
  // Builds the 'd' attribute's value with the result
  // of the math to have a link that goes from MIDDLE to MIDDLE
  // on the parent and child
  // needs improvement for each line to start/end in the middle of the node
  const { x: sX, y: sY, width: sWidth, height: sHeight } = start;
  const { x: eX, y: eY, width: eWidth, height: eHeight } = end;

  const [startX, startY] = [
    Math.floor(sX + sWidth / 2),
    Math.floor(sY + sHeight / 2),
  ];
  const [endX, endY] = [
    Math.floor(eX + eWidth / 2),
    Math.floor(eY + eHeight / 2),
  ];

  return `M ${startX},${startY} L ${endX},${endY}`;
}

export function getNodesCoordinates(
  links: NodeDOMToArray[],
  el: SVGSVGElement | null,
  // eslint-disable-next-line no-unused-vars
  pathMaker: (start: DOMRect, end: DOMRect) => string
): (LinkPosition | null)[] | null {
  // this function finds the elements on the page by Id
  // and calls getBoundingClientRect
  if (!el) return null;
  const container = el.getBoundingClientRect();

  const linksArr = links
    .map((link) => {
      if (link.id.length > 1) {
        const splitId = link.id.split('-');
        const parentId = splitId.slice(0, -1).join('-');
        const childId = link.id;

        const parentNode = document.getElementById(parentId);
        const childNode = document.getElementById(childId);

        if (childNode === null) return null;
        if (parentNode && childNode) {
          const parentRect = parentNode?.getBoundingClientRect();
          const childRect = childNode?.getBoundingClientRect();

          parentRect.x = parentRect.x - container.x;
          parentRect.y = parentRect.y - container.y;
          childRect.x = childRect.x - container.x;
          childRect.y = childRect.y - container.y;

          const builtPathValue: LinkPosition = {
            pathValue: pathMaker(parentRect, childRect),
          };
          return builtPathValue;
        }
      }

      return null;
    })
    .filter((link) => link !== null);

  if (linksArr.length) return linksArr;
  else {
    return null;
  }
}

export function findCurrentNodes(): NodeDOMToArray[] {
  const container = document.getElementsByClassName('node');

  const toArray = Array.from(container).map((node) => ({
    id: node.id,
    name: node.textContent,
  }));

  return toArray;
}
