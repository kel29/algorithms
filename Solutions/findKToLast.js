// Implement an algorithm to find the kth to last element of a
// singly linked list.

// Note: if k is 1, the last value in the LinkedList should be returned.

const findKToLast = (LinkedList, k) => {
  if (!LinkedList.head || k <= 0) return null

  let lead = LinkedList.head
  let follow = LinkedList.head

  for (let i = 1; i < k; i++) {
    if (lead.next) {
      lead = lead.next
    } else {
      return null
    }
  }

  while (lead.next) {
    lead = lead.next
    follow = follow.next
  }

  return follow
}
