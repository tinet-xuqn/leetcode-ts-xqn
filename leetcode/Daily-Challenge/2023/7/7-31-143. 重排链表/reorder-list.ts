class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head) {
    return
  }
  const stack: ListNode[] = []
  while (head) {
    stack.push(head)
    head = head.next
  }
  head = <ListNode>stack.shift()
  while (stack.length) {
    head.next = <ListNode>stack.pop()
    head = head.next
    if (stack.length) {
      head.next = <ListNode>stack.shift()
      head = head.next
    }
  }
  head.next = null
};
