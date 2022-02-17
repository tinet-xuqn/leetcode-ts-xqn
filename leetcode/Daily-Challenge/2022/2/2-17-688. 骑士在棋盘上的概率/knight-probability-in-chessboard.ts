function knightProbability(n: number, k: number, row: number, column: number): number {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push([])
    for (let j = 0; j < n; j++) {
      let count = 0
      if (i + 1 < n) {
        if (j + 2 < n) {
          count++
        }
        if (j - 2 >= 0) {
          count++
        }
      }
      if (i - 1 >= 0) {
        if (j + 2 < n) {
          count++
        }
        if (j - 2 >= 0) {
          count++
        }
      }
      if (i + 2 < n) {
        if (j + 1 < n) {
          count++
        }
        if (j - 1 >= 0) {
          count++
        }
      }
      if (i -2 >= 0) {
        if (j + 1 < n) {
          count++
        }
        if (j - 1 >= 0) {
          count++
        }
      }
      res[i][j] = count
    }
  }
};
