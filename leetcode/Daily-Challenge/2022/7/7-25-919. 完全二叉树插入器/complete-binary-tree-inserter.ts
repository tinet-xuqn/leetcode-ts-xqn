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

class CBTInserter {
  cbtArr: TreeNode[][] = []
  deep: number = 0
  constructor(root: TreeNode | null) {
    if (!root) {
      return
    }
    let queue: TreeNode[] = [<TreeNode>root]
    while (queue.length) {
      let l: number = queue.length, temp: TreeNode[] = []
      while (l) {
        l--;
        const node: TreeNode = <TreeNode>queue.shift()
        temp.push(node)
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
      }
      this.deep++
      this.cbtArr.push(temp)
    }
  }

  insert(val: number): number {
    const item = new TreeNode(val)
    if (this.deep === 0) {
      this.cbtArr.push([item])
      this.deep++
      return val
    }
    if (this.cbtArr[this.deep - 1].length < Math.pow(2, this.deep - 1)) {
      this.cbtArr[this.deep - 1].push(item)
      const index = Math.ceil(this.cbtArr[this.deep - 1].length / 2) - 1
      if (this.cbtArr[this.deep - 1].length % 2 === 0) {
        this.cbtArr[this.deep - 2][index].right = item
      } else {
        this.cbtArr[this.deep - 2][index].left = item
      }
      return this.cbtArr[this.deep - 2][index].val
    } else {
      this.cbtArr.push([item])
      this.deep++
      this.cbtArr[this.deep - 2][0].left = item
      return this.cbtArr[this.deep - 2][0].val
    }
  }

  get_root(): TreeNode | null {
    return this.cbtArr[0][0]
  }
}


class CBTInserter1 {
  root: TreeNode | null
  child: TreeNode[] = []
  constructor(root: TreeNode | null) {
    this.root = root
    if (!root) {
      return
    }
    let queue: TreeNode[] = [<TreeNode>root]
    while (queue.length) {
      let l: number = queue.length;
      while (l) {
        l--;
        const node: TreeNode = <TreeNode>queue.shift()
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
        if (!(node.left && node.right)) {
          this.child.push(node)
        }
      }
    }
  }

  insert(val: number): number {
    const item = new TreeNode(val)
    const node = this.child[0]
    let res = node.val
    if (!node.left) {
      node.left = item
    } else {
      node.right = item
      this.child.shift()
    }
    this.child.push(item)
    return res
  }

  get_root(): TreeNode | null {
    return this.root
  }
}