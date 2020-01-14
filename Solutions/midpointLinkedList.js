// Find the midpoint of a singly linked list. If the list is even, return the
// second of the middle two nodes.

const listMidpoint = (LinkedList) => {
  let fast = LinkedList.head
  if (!fast || !fast.next) { return fast }

  let slow = LinkedList.head
  let round = 0

  while (fast) {
    if (round % 2 === 0) {
      slow = slow.next
    }
    fast = fast.next
    round += 1
  }

  return slow
}
