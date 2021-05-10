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
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaf1 = inorder(root1, []);
  const leaf2 = inorder(root2, []);
  console.log(leaf1, leaf2);
  return leaf1.join('') === leaf2.join('');
};

function inorder(root: TreeNode | null, leafRes: number[]) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    leafRes.push(root.val);
  }
  inorder(root.left, leafRes);
  inorder(root.right, leafRes);
  return leafRes;
}