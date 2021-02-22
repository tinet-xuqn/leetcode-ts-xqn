function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 1 || n === 1 ) {
    return true;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;
};
