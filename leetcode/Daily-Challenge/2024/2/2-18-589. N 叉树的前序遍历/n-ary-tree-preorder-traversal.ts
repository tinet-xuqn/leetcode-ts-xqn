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

function preorder(root: Node | null): number[] {
  const res: number[] = []
  function dfs(root: Node | null): number[] {
    if (root) {
      res.push(root.val)
      for (let i = 0; i < root.children.length; i++) {
        dfs(root.children[i])
      }
    }
    return res
  }
  return dfs(root)
};