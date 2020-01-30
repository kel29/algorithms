// Given a binary tree, check whether it is a mirror of itself
// https://leetcode.com/problems/symmetric-tree/

const isSymmetric = (root) => {
  if (!root) return true
  
  const compareSides = (left, right) => {
      if (!left && !right) return true
      if (!left || !right || left.val !== right.val) return false
      return compareSides(left.left, right.right) && compareSides(left.right, right.left)
  }
  
  return compareSides(root.left, root.right)
}