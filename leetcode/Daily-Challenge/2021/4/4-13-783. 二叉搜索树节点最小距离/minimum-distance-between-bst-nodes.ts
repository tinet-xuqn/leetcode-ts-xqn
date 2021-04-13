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
function minDiffInBST(root: TreeNode | null): number {
  const res: number[] = [];
  function inorder(root: TreeNode | null) {
    if (!root) {
      return
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);

  let min: number = res[1] - res[0];
  for (let i = 2; i < res.length; i++) {
    min = Math.min(min, res[i] - res[i - 1]);
  }
  return min;
};


// 中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
  const res = [];
  function inorder(root: TreeNode | null) {
    if (!root) {
      return
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res;
}