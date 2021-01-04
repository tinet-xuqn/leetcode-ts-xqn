class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyN: ListNode = new ListNode();
  dummyN.next = head;
  let l = 1;
  let cur: ListNode = dummyN;
  while (cur.next) {
    l++;
    cur = cur.next;
  }
  let i = l - n;
  cur = dummyN;
  while (--i) {
    cur = cur.next as ListNode;
  }
  cur.next = (cur.next as ListNode).next;
  return dummyN.next;
};

function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  const dummyN: ListNode = new ListNode();
  dummyN.next = head;
  const stack: ListNode[] = [];
  let cur: ListNode | null = dummyN;
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }
  while (n--) {
    stack.pop();
  }
  cur = stack.pop() as ListNode;
  cur.next = (cur.next as ListNode).next;
  return dummyN.next;
};

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  const dummyN: ListNode = new ListNode();
  dummyN.next = head;
  let first: ListNode = dummyN;
  let second: ListNode = dummyN;
  while (n) {
    first = first.next as ListNode;
    n--;
  }
  while (first.next) {
    first = first.next as ListNode;
    second = second.next as ListNode;
  }
  second.next = (second.next as ListNode).next;
  return dummyN.next;
};