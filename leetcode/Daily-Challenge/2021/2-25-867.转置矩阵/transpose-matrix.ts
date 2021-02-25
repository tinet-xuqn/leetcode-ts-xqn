function transpose(matrix: number[][]): number[][] {
  const res: number[][] = [];
  const m: number = matrix.length, n: number = matrix[0].length;
  for (let i = 0; i < n; i++) {
    res[i] = [];
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = matrix[i][j]
    }
  }
  return res;
};

function transpose1(matrix: number[][]): number[][] {
  return matrix[0].map((item, index) => {
    return matrix.map(row => {
      return row[index];
    })
  });
};
