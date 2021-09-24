/* *
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

function flatten(head: Node | null): Node | null {
  if (!head) {
    return null;
  }
  let queue: Node[] = [head];
  let now: Node | null = null
  while (queue.length) {
    let cur: Node = queue.pop();
    if (now) {
      now.next = cur;
      cur.prev = now;
    }
    if (cur && cur.next) {
      queue.push(cur.next);
    }
    if (cur && cur.child) {
      queue.push(cur.child);
      cur.child = null;
    }
    now = cur
  }
  return head
};