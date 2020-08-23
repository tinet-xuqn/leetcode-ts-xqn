### balanced-binary-tree

#### [平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

思路：比较每一个节点的左右高度差


#### 从上往下
```
function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);


  function maxDepth(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }
    const left_depth: number = maxDepth(root.left),
          right_depth: number = maxDepth(root.right);
    return Math.max(left_depth, right_depth) + 1;
  }
};
```





#### 从下往上

```
function isBalanced2(root: TreeNode | null): boolean {
  return height(root) >= 0;
  function height(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }
    const leftHeight: number = height(root.left),
      rightHeight: number = height(root.right);
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}
```