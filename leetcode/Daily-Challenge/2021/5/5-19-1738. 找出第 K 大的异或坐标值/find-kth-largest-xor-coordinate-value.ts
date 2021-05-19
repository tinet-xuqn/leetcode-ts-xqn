function kthLargestValue(matrix: number[][], k: number): number {
  let m: number = matrix.length;
  let n: number = matrix[0].length;
  let res: number[][] = [];
  let resK: number[] = [];
  for (let i = 0; i < m; i++) {
    let sum = 0;
    res[i] = [];
    for (let j = 0; j < n; j++) {
      sum = sum ^ matrix[i][j];
      if (i === 0) {
        res[i][j] = sum;
      } else {
        res[i][j] = res[i - 1][j] ^ sum;
      }
      resK.push(res[i][j]);
    }
  }
  resK = resK.sort((a, b) => b - a);
  return resK[k - 1];
};
