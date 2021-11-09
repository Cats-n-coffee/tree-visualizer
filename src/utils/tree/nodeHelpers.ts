export function findNodeAndInsert(
  parentName: string | null,
  newNode: TreeNode,
  tree: TreeNode
) {
  if (tree.name === parentName) {
    console.log("adding a child to the parent", tree);
    tree.allChildren.push(newNode);
  } else {
    for (let i = 0; i < tree.allChildren.length; i += 1) {
      console.log("we have to find the parent");
      findNodeAndInsert(parentName, newNode, tree.allChildren[i]);
    }
  }
  return [tree];
}
