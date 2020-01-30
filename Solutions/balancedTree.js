// Given a binary tree, determine if it is height-balanced, where the left
// and right subtrees of every node differ in height by no more than 1.

const isBalanced = (root) => {
    
  const treeHeight = (node) => {
      if (!node) return 0
      let left = treeHeight(node.left)
      let right = treeHeight(node.right)
      
      if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
      
      return 1 + Math.max(left, right)
  }
  
  return treeHeight(root) > -1
}
