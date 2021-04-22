function maxSumSubmatrix(matrix: number[][], k: number): number {
  // 初始值设成0的话，结果为负的就不能正确返回了
  let res: number = -Infinity;
  const m: number = matrix.length;
  const n: number = matrix[0].length;
  for (let i = 0; i < m; i++) {
    const b: number[] = new Array(n).fill(0);
    for (let j = i; j < m; j++) {
      for (let index = 0; index < n; index++) {
        b[index] += matrix[j][index];
      }
      for (let bi = 0; bi < n; bi++) {
        let sum: number = 0;
        for (let bj = bi; bj < n; bj++) {
          sum += b[bj];
          if (sum <= k && sum > res) {
            res = sum;
          }
        }
      }
    }
  }
  return res;
};
