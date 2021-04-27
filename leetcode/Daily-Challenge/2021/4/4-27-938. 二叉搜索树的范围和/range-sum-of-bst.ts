class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum: number = 0;
  function inorder(root: TreeNode | null) {
    if (!root) {
      return;
    }
    if (root.val < low) {
      inorder(root.right);
    } else if (root.val > high) {
      inorder(root.left);
    } else {
      inorder(root.left);
      sum += root.val;
      inorder(root.right);
    }
  }
  inorder(root);
  return sum;
};