// Given an array where elements are sorted in ascending order, convert 
// it to a height balanced BST. For this problem, a height-balanced binary 
// tree is defined as a binary tree in which the depth of the two subtrees 
// of every node never differ by more than 1.

const sortedArrayToBST = nums => {
  if (!nums || nums.length < 1) return null
  let root = new TreeNode()
  
  const traverse = (minIdx, maxIdx, node) => {
      if (minIdx <= maxIdx) {
          let mid = Math.ceil((maxIdx - minIdx) / 2 + minIdx)
          node.val = nums[mid]
          node.left = traverse(minIdx, mid - 1, new TreeNode())
          node.right = traverse(mid + 1, maxIdx, new TreeNode())
          return node
      } else {
          return null
      }
  }
  
  traverse(0, nums.length - 1, root)
  return root
}
