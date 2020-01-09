// Implement an algorithm to delete a node in the middle of
// a singly linked list, given only access to that node.

// For instance, if linked list was 1 -> 2 -> 3 -> 4 -> 5 and
// you are given 3, nothing is returned from the function but
// the linked list now looks like 1 -> 2 -> 4 -> 5

const deleteGivenNode = (node) => {
  if (!node || !node.next) { return null }

  node.data = node.next.data
  node.next = node.next.next
}
