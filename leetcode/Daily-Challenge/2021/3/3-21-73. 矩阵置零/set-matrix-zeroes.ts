/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  const mArr: number[] = [];
  const nArr: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        mArr.push(i);
        nArr.push(j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mArr.includes(i) || nArr.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};