// Given a binary tree, return the level order traversal of its nodes' values
// from left to right, level by level. 

// For example: Given binary tree [3,9,20,null,null,15,7], return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

const levelOrder = root => {
  let levels = []
  if (!root) return levels
  
  const traverse = (node, depth) => {
      if (node) {
          (levels[depth]) ? levels[depth].push(node.val) : levels[depth] = [node.val]
          traverse(node.left, depth + 1)
          traverse(node.right, depth + 1)
      }
  }
  
  traverse(root, 0)
  return levels
}
