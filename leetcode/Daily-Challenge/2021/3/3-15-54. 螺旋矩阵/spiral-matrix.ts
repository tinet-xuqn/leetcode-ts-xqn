function spiralOrder(matrix: number[][]): number[] {
  const m: number = matrix.length;
  const n: number = matrix[0].length;
  const res: number[] = [];

  let top: number = 0,
        right: number = n - 1,
        bottom: number = m - 1,
        left: number = 0;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let j = top + 1; j <= bottom; j++) {
      res.push(matrix[j][right]);
    }
    if (left < right && bottom > top) {
      for (let i = right - 1; i > left; i--) {
        res.push(matrix[bottom][i]);
      }
      for (let j = bottom; j > top; j--) {
        res.push(matrix[j][left]);
      }
    }
    top++;
    right--;
    bottom--;
    left++;
  }
  return res;
};
