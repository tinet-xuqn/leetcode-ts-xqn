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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const result: number[][] = [];
  const queue: TreeNode[] = [ root ];
  while (queue.length) {
    let length = queue.length;
    const resChildren: number[] = [];
    while (length > 0) {
      const node: TreeNode = queue.shift() as TreeNode;
      resChildren.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      length--;
    }
    result.unshift(resChildren);
  }
  return result;
};