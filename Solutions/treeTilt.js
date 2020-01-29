// Given a binary tree, return the tilt of the whole tree. The tilt of a tree
// node is defined as the absolute difference between the sum of all left subtree
// node values and the sum of all right subtree node values. Null node has tilt 0.
// The tilt of the whole tree is defined as the sum of all nodes' tilt.

const findTilt = function(node) {
  let tilt = 0
  
  const sumNodes = (node) => {
    if (!node) { return 0 }
    
    let left = sumNodes(node.left)
    let right = sumNodes(node.right)
    tilt += Math.abs(left - right)     
    return node.val + left + right
  }
  
  sumNodes(node)
  return tilt
}
