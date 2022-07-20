function shiftGrid(grid: number[][], k: number): number[][] {
  const res: number[][] = JSON.parse(JSON.stringify(grid))
  const m: number = grid.length
  const n: number = grid[0].length
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const row: number = (Math.floor((j + k) / n) + i) % m
      const col: number = (j + k) % n
      res[row][col] = grid[i][j]
    }
  }
  return res
};

function shiftGrid1(grid: number[][], k: number): number[][] {
  const m: number = grid.length
  const n: number = grid[0].length
  const index = k % (m * n)
  let flat = grid.flat()
  flat = flat.splice(-index).concat(flat)
  const res: number[][] = []
  for (let i = 0; i < m; i++) {
    const item: number[] = []
    for (let j = 0; j < n; j++) {
      item.push(flat[i * n + j])
    }
    res.push(item)
  }
  return res
};
