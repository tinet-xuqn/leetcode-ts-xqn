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
  const res: Array<TreeNode | null> = []
  const set: Set<number> = new Set(to_delete)
  root = dfs(root)
  if (root) {
    res.push(root)
  }
  return res

  function dfs(node: TreeNode | null): TreeNode | null {
    if (node === null) {
      return null
    }
    node.left = dfs(node.left)
    node.right = dfs(node.right)
    if (set.has(node.val)) {
      set.delete(node.val)
      if (node.left) {
        res.push(node.left)
      }
      if (node.right) {
        res.push(node.right)
      }
      return null
    }
    return node
  }
};

