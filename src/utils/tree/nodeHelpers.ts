interface FindAndInsert {
  parentName: string | null;
  newNode: TreeNode;
  tree: TreeNode;
}

export function findNodeAndInsert({
  parentName,
  newNode,
  tree,
}: FindAndInsert) {
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
