function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const grid: number[][] = new Array(n).fill([]).map(() => new Array(n).fill(1))
  const dp: number[][] = new Array(n).fill([]).map(() => new Array(n).fill(n))
  mines.forEach(item => {
    grid[item[0]][item[1]] = 0
  })
  let k: number = 0
  let count: number = 0
  for (let i = 0; i < n; i++) {
    // 左
    count = 0
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
    }
    // 右
    count = 0
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 0) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
    }
  }
  for (let j = 0; j < n; j++) {
    // 上
    count = 0
    for (let i = 0; i < n; i++) {
      if (grid[i][j] === 0) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
    }
    // 下
    count = 0
    for (let i = n - 1; i >= 0; i--) {
      if (grid[i][j] === 0) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
      k = Math.max(k, dp[i][j])
    }
  }
  return k
};
