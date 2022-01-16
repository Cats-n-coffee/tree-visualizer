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

export function findNodeAndEdit(
  nodeName: string,
  newData: TreeNode,
  currentTree: TreeNode
): TreeNode[] | [] {
  if (currentTree.name === nodeName) {
    currentTree.name = newData.name;
    currentTree.props = newData.props;
    currentTree.state = newData.state;

    // we need to update the parent property of all the children in the array
    for (let i = 0; i < currentTree.allChildren.length; i += 1) {
      const child = currentTree.allChildren[i];
      child.parent = newData.name;
    }
  } else {
    for (let i = 0; i < currentTree.allChildren.length; i += 1) {
      findNodeAndEdit(nodeName, newData, currentTree.allChildren[i]);
    }
  }
  return [currentTree];
}

export function findNodeAndRead(
  nodeName: string,
  currentTree: TreeNode
): TreeNode | string {
  if (!currentTree) return 'No component yet';
  if (currentTree.name === nodeName) return currentTree;
  else if (
    currentTree.name !== nodeName &&
    currentTree.allChildren.length > 0
  ) {
    for (let i = 0; i < currentTree.allChildren.length; i += 1) {
      if (currentTree.allChildren[i].name === nodeName) {
        return currentTree.allChildren[i];
      }
      findNodeAndRead(nodeName, currentTree.allChildren[i]);
    }
  }
  return 'No match';
}

// Used for the dropdown list when creating an new node
export function createNodeNameList(
  currentTree: TreeNode,
  nameList: string[] = []
): string[] | null {
  if (!currentTree) return null;
  else if (
    currentTree.parent === null &&
    currentTree.allChildren.length === 0
  ) {
    //handles the case where we only have a root node
    nameList.push(currentTree.name);
  } else if (currentTree.allChildren && currentTree.allChildren.length > 0) {
    // handles the case where the root node has children
    if (nameList.indexOf(currentTree.name) === -1) {
      nameList.push(currentTree.name);
    }
    for (let i = 0; i < currentTree.allChildren.length; i += 1) {
      nameList.push(currentTree.allChildren[i].name);
      createNodeNameList(currentTree.allChildren[i], nameList);
    }
  }
  return nameList;
}
