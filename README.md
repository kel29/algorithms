# Algorithms
An exposition of coding problems and solutions. For each problem listed here, you can follow the link to find my solutions. Credit due to Leet code, Code Wars, and Cracking the Coding Interview for providing great algorithms to work through.

## Algorithm Topics
- [Trees](#Trees)
- [Stacks and Queues](#Stacks-and-Queues)
- [Linked Lists](#Linked-Lists)
- [String and Array Manipulation](#String-and-Array-Manipulation)

## Trees

### [Binary Tree Cousins](https://leetcode.com/problems/cousins-in-binary-tree/)
##### From LeetCode

"Given a binary tree and two unique values, check if two nodes with those values are cousins (same level with different parents)."

**[JavaScript Solution](./Solutions/treeCousins.js)**

---

### [Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)
##### From LeetCode

"Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST."

**[JavaScript Solution](./Solutions/greaterTree.js)**

---

### [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
##### From LeetCode

"Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center)."

**[JavaScript Solution](./Solutions/symmetricTree.js)**

---

## Stacks and Queues

### Towers of Hanoi
##### Modified From Cracking the Coding Interview

Write a function that solves the Towers of Hanoi problem using three stacks.

**[JavaScript Solution](./Solutions/towersOfHanoi.js)**

---

### Stack with Min
##### Modified From Cracking the Coding Interview

Create a Stack class which also has a function `min` that returns the minimum element. Functions `push`, `pop`, and `min` should all operate in O(1) time.

**[JavaScript Solution](./Solutions/stackWithMin.js)**

---

## Linked Lists

### Sum Linked List Digits
##### From Cracking the Coding Interview

Write a function that add two linked lists together, where each node contains a single digit stored in reverse order.

**[JavaScript Solution](./Solutions/linkedListSum.js)**

---

### Linked List Midpoint

"Find the midpoint of a singly linked list."

**[JavaScript Solution](./Solutions/midpointLinkedList.js)**

---

### Partition Linked List
##### From Cracking the Coding Interview

"Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x."

**[JavaScript Solution](./Solutions/paritionLinkedList.js)**

---

### K to Last Value of a Linked List
##### From Cracking the Coding Interview

"Implement an algorithm to find the kth to last element of a singly linked list."

**[JavaScript Solution](./Solutions/findKToLast.js)**

---

### Remove Given Node from a Linked List
##### From Cracking the Coding Interview

"Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node."

**[JavaScript Solution](./Solutions/deleteGivenNode.js)**

---

### Remove Duplicates from a Linked List
##### Modified From Cracking the Coding Interview

"Write code to remove duplicated from an unsorted, singly linked list."

**[JavaScript Solution](./Solutions/removeDuplicatedLinkedList.js)**

---

## String and Array Manipulation

### String Permutation
##### From Cracking the Coding Interview

"Given two strings, write a mentod to decide if one is a permutation of the other."

**[JavaScript Solution](./Solutions/stringPermutation.js)**

---

### String Compression
##### Modified From Cracking the Coding Interview

"Implement a method to perform basic string compression using the counts of repeated characters."

**[JavaScript Solution](./Solutions/stringCompression.js)**

---

### Unique String
##### From Cracking the Coding Interview

"Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?"

**[JavaScript Solution](./Solutions/uniqueString.js)**

---

### [Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)
##### From Code Wars

"A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers."

**[Ruby Solution](./Solutions/digital_root.rb)**

---

### [Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6)
##### From Code Wars

"In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?"

**[JavaScript Solution](./Solutions/growthOfAPopulation.js)**
