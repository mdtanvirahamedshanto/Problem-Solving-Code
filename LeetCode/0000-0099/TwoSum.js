/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const prevVaslue = {};
  for (let i = 0; i < l1.length; i++) {
    const currentValue = l1[i];
    const neededValue = l2 - currentValue;

    const index2 = prevVaslue[neededValue];

    if (index2 != null) {
      return [index2, i];
    } else {
      prevVaslue[currentValue] = i;
    }
  }
};
