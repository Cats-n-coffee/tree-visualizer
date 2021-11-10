export function findNodeAndInsert(
  parentName: string | null,
  newNode: TreeNode,
  tree: TreeNode
) {
  // If the names match, we found the parent to which we add the child to
  if (tree.name === parentName) {
    tree.allChildren.push(newNode);
  } else {
    // If the names don't match, we keep looking in the tree
    for (let i = 0; i < tree.allChildren.length; i += 1) {
      findNodeAndInsert(parentName, newNode, tree.allChildren[i]);
    }
  }
  return [tree];
}
