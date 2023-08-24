function countServers(grid: number[][]): number {
  let res: number = 0
  let m = grid.length
  let n = grid[0].length
  let rowM: number[] = []
  for (let i = 0; i < m; i++) {
    let row = 0
    for (let j = 0; j < n; j++) {
      row += grid[i][j]
    }
    if (row > 1) {
      rowM.push(i)
      res += row
    }
  }
  for (let j = 0; j < n; j++) {
    let column = 0
    let coln = 0
    for (let i = 0; i < m; i++) {
      column += grid[i][j]
      if (grid[i][j] === 1 && rowM.includes(i)) {
        coln++
      }
    }
    if (column > 1) {
      res = (res + column - coln)
    }
  }
  return res
};
