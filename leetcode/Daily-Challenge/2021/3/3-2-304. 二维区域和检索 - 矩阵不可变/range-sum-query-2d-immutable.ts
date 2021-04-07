class NumMatrix {
  numMatrix: number[][] = [];
  sumsMatrix: number[][] = [];
  constructor(matrix: number[][]) {
    this.numMatrix = matrix;
    this.setSumsMatrix();
  }

  setSumsMatrix(): void {
    const m = this.numMatrix.length;
    const n = this.numMatrix[0]?.length;
    for (let i = 0; i < m; i++) {
      this.sumsMatrix.push([this.numMatrix[i][0]]);
      for (let j = 1; j < n; j++) {
        this.sumsMatrix[i][j] = this.sumsMatrix[i][j - 1] + this.numMatrix[i][j];
      }
    }
  }
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let res: number = 0;
    for (let i = row1; i <= row2; i++) {
      res += (this.sumsMatrix[i][col2] - this.sumsMatrix[i][col1] + this.numMatrix[i][col1])
    }
    return res;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */