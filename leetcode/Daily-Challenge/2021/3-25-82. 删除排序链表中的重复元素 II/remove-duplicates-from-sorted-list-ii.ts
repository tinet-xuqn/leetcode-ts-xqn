class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const objMap = new Map();
  while (head) {
    if (objMap.has(head.val)) {
      objMap.get(head.val).count++;
    } else {
      objMap.set(head.val, {
        count: 1,
      })
    }
    head = head.next;
  }
  const res = new ListNode();
  let cur = res;
  for (let [key, value] of objMap.entries()) {
    if (value.count === 1) {
      cur.next = new ListNode(key);
      cur = cur.next;
    }
  }
  return res.next;
};

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const res = new ListNode();
  res.next = head;
  let left = res;
  while (left.next && left.next.next) {
    if (left.next.val === left.next.next.val) {
      const val = left.next.val;
      while (left.next && left.next.val === val) {
        left.next = left.next.next;
      }
    } else {
      left = left.next;
    }
  }
  return res.next;
};