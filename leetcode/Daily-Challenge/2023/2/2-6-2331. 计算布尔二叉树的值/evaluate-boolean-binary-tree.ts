/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function evaluateTree(root: TreeNode | null): boolean {
  if (root.val === 0 || root.val ===1) {
    return Boolean(root.val)
  }
  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right)
  }
  if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right)
  }
};
