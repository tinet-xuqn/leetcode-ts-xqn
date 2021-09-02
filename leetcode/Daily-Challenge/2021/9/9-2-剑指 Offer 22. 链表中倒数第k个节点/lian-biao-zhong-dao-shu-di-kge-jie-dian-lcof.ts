class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let R: ListNode = head;
  let L: ListNode = head;
  while (k) {
    k--
    R = R.next;
  }
  while (R) {
    R = R.next;
    L = L.next;
  }
  return L;
}
