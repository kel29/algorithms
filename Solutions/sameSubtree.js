// Given two non-empty binary trees s and t, check whether tree t has exactly 
// the same structure and node values with a subtree of s. A subtree of s is 
// a tree consists of a node in s and all of this node's descendants.

const isSameTree = (t1, t2) => {
  if (!t1 && !t2) return true
  if (!t1 || !t2 || t1.val !== t2.val) return false
  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)
}

const isSubtree = function(s, t) {
  if (!s) return false
  if (s.val === t.val) {
    if (isSameTree(s, t)) return true 
  }
  
  return isSubtree(s.left, t) || isSubtree(s.right, t)
}
