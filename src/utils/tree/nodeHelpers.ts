export function findNodeAndInsert(
  parentName: string | null,
  newNode: TreeNode,
  tree: TreeNode
) {
  console.log("node", newNode, "parent", parent, "tree", tree);
  if (tree.name && tree.name === parentName) {
    console.log("adding a child");
    tree.children.push(newNode);
  } else {
    for (let i = 0; i < tree.children.length; i += 1) {
      console.log("we have to find the parent");
      findNodeAndInsert(parentName, newNode, tree.children[i]);
    }
  }
  return [tree];
}
