function oddCells(m: number, n: number, indices: number[][]): number {
  const row = new Array(m).fill(0)
  const col = new Array(n).fill(0)
  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]] = row[indices[i][0]] ? 0 : 1
    col[indices[i][1]] = col[indices[i][1]] ? 0 : 1
  }
  const mR = row.filter(item => item === 1).length
  const nC = col.filter(item => item === 1).length
  return mR * (n - nC) + nC * (m - mR)
};
