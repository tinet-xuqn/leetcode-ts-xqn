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
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let queue: [TreeNode | null, TreeNode | null, number][] = [[root, null, 0]];
  let res = [];
  while (queue.length) {
    const curItem: [TreeNode | null, TreeNode | null, number] = queue.shift();
    const curNode = curItem[0];
    const k = curItem[2];
    if (!curNode) {
      continue;
    }
    if (curNode.val === x || curNode.val === y) {
      res.push([curItem[1], k]);
    }
    queue.push([curNode.left, curNode, k + 1]);
    queue.push([curNode.right, curNode, k + 1]);
  }
  if (res.length < 2) {
    return false;
  }
  const resX = res[0];
  const resY = res[1];
  return resX[0] !== resY[0] && resX[1] === resY[1];
};
