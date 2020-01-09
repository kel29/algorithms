// Write code to partition a linked list around a value x, such
// that all nodes less than x come before all nodes greater
// than or equal to x.

const partitionLinkedList = (LinkedList, x) => {
  let current = LinkedList.head
  let previous = new LinkedListNode()

  while (current) {
    if (current.data < x && current !== LinkedList.head) {
      previous.next = current.next
      current.next = LinkedList.head
      LinkedList.head = current
      current = previous.next
    } else {
      previous = current
      current = current.next
    }
  }
  return LinkedList
}
