function knightProbability(n: number, k: number, row: number, column: number): number {
  let res: number[][][] = []
  const stepArr: number[][] = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1]
  ]
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let step = 0; step <= k; step++) {
    res.push(JSON.parse(JSON.stringify(arr)))
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (step === 0) {
          res[step][i][j] = 1
        } else {
          stepArr.forEach(item => {
            const ni = item[0] + i, nj = item[1] + j;
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
              console.log(res[step][i][j]);
              res[step][i][j] += (res[step - 1][ni][nj] / 8)
            }
          })
        }
      }
    }
  }
  return res[k][row][column]
};
