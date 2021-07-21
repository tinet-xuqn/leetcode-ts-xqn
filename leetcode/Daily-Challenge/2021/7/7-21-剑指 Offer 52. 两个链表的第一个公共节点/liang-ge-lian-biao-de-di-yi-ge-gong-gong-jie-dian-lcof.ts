/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    let curB = headB;
    let count = 0;
    while (count < 2) {
      if (curA === curB) {
        return curA;
      }
      if (curA && curA.next) {
        curA = curA.next;
      } else {
        curA = headB;
        count++;
      }
      if (curB && curB.next) {
        curB = curB.next;
      } else {
        curB = headA;
      }
    }
    return null;
};

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};