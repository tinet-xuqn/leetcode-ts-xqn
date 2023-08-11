function diagonalSum(mat: number[][]): number {
  let n: number = mat.length
  let res: number = 0
  for (let i = 0; i < n; i++) {
    res = res + mat[i][i] + mat[i][n - 1 - i]
  }
  if (n % 2 === 0) {
    return res
  }
  let mid: number = (n - 1) / 2
  return res - mat[mid][mid]
};
