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

function increasingBST(root: TreeNode | null): TreeNode | null {
  const res: TreeNode | null = new TreeNode();
  let curr: TreeNode | null = res;
  function inorder(root: TreeNode | null) {
    if (!root) {
      return;
    }
    inorder(root.left);
    curr.right = new TreeNode(root.val);
    curr = curr.right;
    inorder(root.right);
  }
  inorder(root);
  return res.right;
};
