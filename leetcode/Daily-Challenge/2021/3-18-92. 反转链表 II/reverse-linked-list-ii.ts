class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head) {
    return null;
  }
  if (left === right) {
    return head;
  }
  let curNode = head;
  let queueL: ListNode[] = [];
  let queueReverse: ListNode[] = [];
  let queueR: ListNode[] = [];
  let cur = 1;
  while (curNode) {
    if (cur < left) {
      queueL.push(curNode);
    } else if (cur > right) {
      queueR.push(curNode);
    } else {
      queueReverse.push(curNode);
    }
    curNode = curNode.next;
    cur++;
  }
  const res: ListNode | null = new ListNode();
  let lastNode = res;

  console.log(queueL, queueReverse, queueR);
  while (queueL.length) {
    lastNode.next = queueL.shift();
    lastNode = lastNode.next;
  }
  while (queueReverse.length) {
    lastNode.next = queueReverse.pop();
    lastNode = lastNode.next;
  }
  while (queueR.length) {
    lastNode.next = queueR.shift();
    lastNode = lastNode.next;
  }
  lastNode.next = null;
  return res.next;
}

function reverseBetween1(head: ListNode | null, left: number, right: number): ListNode | null {
  const res = new ListNode();
  res.next = head;
  let pre = res;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  let leftNode = pre.next;
  let succ = rightNode.next;
  pre.next = null;
  rightNode.next = null;

  pre.next = reverseList(leftNode);
  leftNode.next = succ;
  return res.next;
}

function reverseBetween2(head: ListNode | null, left: number, right: number): ListNode | null {
  const res = new ListNode();
  res.next = head;
  let pre = res;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; i++) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return res.next;
}

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
