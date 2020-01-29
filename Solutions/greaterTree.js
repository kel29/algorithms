// Given a Binary Search Tree (BST), convert it to a Greater Tree such
// that every key of the original BST is changed to the original key plus
// sum of all keys greater than the original key in BST.

const convertBST = function(root) {
  let sum = 0
  
  const greaterTree = (node) => {
    if (node) {
      greaterTree(node.right)
      sum += node.val
      node.val = sum
      greaterTree(node.left)
    }
    return node
  }
  
  return greaterTree(root)
}
