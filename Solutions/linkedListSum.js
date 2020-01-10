// You have two numbers represented by a linked list, where each node
// contains a single digit. The digits are stored in reverse order,
// such that the 1's digit is at the head of the list. Write a function
// that adds the two numbers and returns the sum as a linked list.

const = linkedListSum = (LinkedList1, LinkedList2) => {
  let digit = new LinkedListNode()
  let summed = new LinkedList(digit)
  let overflow = 0
  let marker1 = LinkedList1.head
  let marker2 = LinkedList2.head
  let sum = marker1.data + marker2.data + overflow

  while (sum > 0) {
    sum < 10 ? overflow = 0 : overflow = 1

    digit.data = sum % 10
    digit.next = new LinkedListNode()
    digit = digit.next
    marker1 = marker1.next
    marker2 = marker2.next
  }

  return summed
}
