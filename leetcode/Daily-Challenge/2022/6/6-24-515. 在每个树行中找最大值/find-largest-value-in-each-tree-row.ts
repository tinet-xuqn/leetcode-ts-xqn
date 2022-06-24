class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const queue = [root]
  const res: number[] = []
  while (queue.length) {
    let rowL: number = queue.length
    let maxValue: number = -Number.MAX_VALUE
    while (rowL > 0) {
      const node: TreeNode = <TreeNode>queue.shift()
      maxValue = Math.max(maxValue, node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      rowL--
    }
    res.push(maxValue)
  }
  return res
};