function largestLocal(grid: number[][]): number[][] {
  const n: number = grid.length
  const res: number[][] = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0))
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let m = i; m <= i + 2; m++) {
        for (let n = j; n <= j + 2; n++) {
          res[i][j] = Math.max(grid[m][n], res[i][j])
        }
      }
    }
  }
  return res
};
