// You have two numbers represented by a linked list, where each node
// contains a single digit. The digits are stored in reverse order,
// such that the 1's digit is at the head of the list. Write a function
// that adds the two numbers and returns the sum as a linked list.

const linkedListSum = (LinkedList1, LinkedList2) => {
  const head = new ListNode(0)
  let digit = head
  let overflow = 0
  let marker1 = LinkedList1
  let marker2 = LinkedList2

  while (marker1 || marker2 || overflow > 0) {
    digit.next = new ListNode()
    digit = digit.next
    let total = overflow
    
    if (marker1) { 
      total += marker1.val 
      marker1 = marker1.next
    }
    if (marker2) { 
      total += marker2.val 
      marker2 = marker2.next
    }
    
    digit.val = total % 10
    overflow = total < 10 ? 0 : 1
  }
  return head.next ? head.next : head
}
