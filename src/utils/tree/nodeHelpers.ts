interface FindAndInsert {
  parentName: string | null;
  newNode: TreeNode;
  tree: TreeNode;
}

export function findNodeAndInsert({
  parentName,
  newNode,
  tree,
}: FindAndInsert): TreeNode[] {
  // If the names match, we found the parent to which we add the child to
  if (tree.name === parentName) {
    tree.allChildren.push(newNode);
  } else {
    // If the names don't match, we keep looking in the tree
    for (let i = 0, len = tree.allChildren.length; i < len; i += 1) {
      findNodeAndInsert({ parentName, newNode, tree: tree.allChildren[i] });
    }
  }
  return [tree];
}

export function findNodeAndDelete(
  nodeName: string,
  currentTree: TreeNode
): TreeNode[] | [] {
  // removing the root node will remove all the children, so we start over
  if (currentTree.parent === null && currentTree.name === nodeName) {
    return [];
  }
  // we need to inspect inside the children array to find the correct node
  else {
    for (let i = 0; i < currentTree.allChildren.length; i += 1) {
      if (currentTree.allChildren[i].name === nodeName) {
        currentTree.allChildren.splice(i, 1);
      } else {
        findNodeAndDelete(nodeName, currentTree.allChildren[i]);
      }
    }
  }
  return [currentTree];
}
