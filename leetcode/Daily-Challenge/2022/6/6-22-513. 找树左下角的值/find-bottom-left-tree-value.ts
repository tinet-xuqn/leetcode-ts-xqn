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

function findBottomLeftValue(root: TreeNode): number {
  const queue: TreeNode[] = [root]
  let node: TreeNode | null = null
  while (queue.length) {
    node = <TreeNode>queue.shift()
    if (node.right) {
      queue.push(node.right)
    }
    if (node.left) {
      queue.push(node.left)
    }
  }
  return (<TreeNode>node).val
}
