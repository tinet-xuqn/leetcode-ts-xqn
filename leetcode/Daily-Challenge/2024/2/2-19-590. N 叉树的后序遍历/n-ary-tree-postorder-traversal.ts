/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
  const res: number[] = []
  function dfs(root: Node | null): number[] {
    if (root) {
      for (let i = 0; i < root.children.length; i++) {
        dfs(root.children[i])
      }
      res.push(root.val)
    }
    return res
  }
  return dfs(root)
};