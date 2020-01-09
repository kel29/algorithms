// Write code to remove duplicated from an unsorted singularly linked list.

const removeDuplicates = (LinkedList) => {
  let current = LinkedList.head
  let previous = new LinkedListNode(null)
  const contents = {}

  while (current) {
    if (contents[current]) {
      previous.next = current.next
    } else {
      contents[current] = true
      previous = current
    }
    current = current.next
  }
}
