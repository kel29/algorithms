// Reverse a singly linked list.

const reverseList = (head, prev = null) => {
  if (!head) return prev
  
  const temp = head.next
  head.next = prev
  
  return reverseList(temp, head)
}