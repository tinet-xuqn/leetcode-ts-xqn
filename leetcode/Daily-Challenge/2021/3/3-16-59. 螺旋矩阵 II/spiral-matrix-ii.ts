function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill([]).map(() => []);
  let m: number = 1;

  let top: number = 0,
        right: number = n - 1,
        bottom: number = n - 1,
        left: number = 0;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res[top][i] = m++;
    }
    for (let j = top + 1; j <= bottom; j++) {
      res[j][right] = m++;
    }
    if (left < right && bottom > top) {
      for (let i = right - 1; i > left; i--) {
        res[bottom][i] = m++;
      }
      for (let j = bottom; j > top; j--) {
        res[j][left] = m++;
      }
    }
    top++;
    right--;
    bottom--;
    left++;
  }
  return res;
};
