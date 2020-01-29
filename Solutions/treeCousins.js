// In a binary tree, the root node is at depth 0, and children of each depth k 
// node are at depth k+1. Two nodes of a binary tree are cousins if they have the
// same depth, but have different parents. We are given the root of a binary tree
// with unique values, and the values x and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are cousins.

const isCousins = function(root, x, y) {
  let depthX = 0
  let depthY = 0
  
  const traverse = (node, depth) => {
    if (!node) return true
    if (node.left && node.right) {
      if (node.left.val === x || node.left.val === y) {
        if (node.right.val === x || node.right.val === y) return false
      } 
    }
    if (node.val === x) depthX = depth
    if (node.val === y) depthY = depth
    return traverse(node.right, depth + 1) && traverse(node.left, depth + 1)
}
  
  return traverse(root, 0) && depthX === depthY
};