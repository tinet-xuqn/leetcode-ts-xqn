function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const map = new Map()
  const m = matrix.length
  const n = matrix[0].length
  let res = 0
  for (let i = 0; i < m; i++) {
    let key: string = ''
    if (matrix[i][0] === 1) {
      for (let j = 0; j < n; j++) {
        key += matrix[i][j]
      }
    } else {
      for (let j = 0; j < n; j++) {
        key += (matrix[i][j] ^ 1)
      }
    }
    map.set(key, (map.get(key) || 0) + 1)
    res = Math.max(res, map.get(key))
  }
  return res
};