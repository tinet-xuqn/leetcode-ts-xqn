class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  if (!root) {
    return [null]
  }
  const res: Array<TreeNode | null> = []
  const queue = [new TreeNode(0, root)]
  const fa = []
  while (queue.length) {
    const item = <TreeNode>queue.shift()
    if (item.left) {
      queue.push(item.left)

      const index = to_delete.findIndex(val => val === item.left.val)
      if (index === -1) {
        res.push(item.left)
      } else {
        item.left = null
        to_delete.splice(index, 1)
      }
    }
    if (item.right) {
      queue.push(item.right)

      const index = to_delete.findIndex(val => val === item.right.val)
      if (index === -1) {
        res.push(item.right)
      } else {
        item.right = null
        to_delete.splice(index, 1)
      }
    }
  }
  return res
};
