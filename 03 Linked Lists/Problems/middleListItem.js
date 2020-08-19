/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let currentNode = head,
    len = 0;
  while (currentNode != null) {
    len++;
    currentNode = currentNode.next;
  }
  currentNode = head;
  console.log(len);
  for (let i = 0; i < len; i++) {
    if (len % 2 == 0 && i == len / 2) {
      return currentNode;
    } else if (len % 2 != 0 && i == Math.floor(len / 2)) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
};
