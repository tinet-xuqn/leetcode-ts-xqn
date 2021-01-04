class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function reorderList(head: ListNode | null): void {
  if (!head) {
    return;
  }
  const queue: ListNode[] = [];
  let cur: ListNode | null = head;
  let l = 0;
  while (cur) {
    l++;
    queue.push(cur as ListNode);
    cur = (cur as ListNode).next;
  }
  let item = queue.shift() as ListNode;
  item.next = null;
  cur = item;
  l--;
  while (l) {
    let item = queue.pop() as ListNode;
    item.next = null;
    cur.next = item;
    cur = cur.next;
    l--;
    if (l) {
      let item = queue.shift() as ListNode;
      item.next = null;
      cur.next = item;
      cur = cur.next;
      l--;
    }
  }
};