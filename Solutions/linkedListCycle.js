// Given a linked list, determine if it has a cycle in it.

const recursiveHasCycle = (head, fast=head) => {
  if (!fast || !fast.next) return false
  fast = fast.next.next
  return fast === head || recursiveHasCycle(head.next, fast)
}

const iterativeHasCycle = head => {
  if (!head.next) return false
  let fast = head.next
  let slow = head
  while (fast) {
    if (!fast.next) return false
    if (fast === slow) return true
    fast = fast.next.next
    slow = slow.next
  }
  return false
}
