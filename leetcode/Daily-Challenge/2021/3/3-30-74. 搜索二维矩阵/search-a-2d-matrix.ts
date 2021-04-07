function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0, right = m * n - 1;
  const arr = matrix.flat();
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle -1;
    } else {
      return true;
    }
  }
  return false;
};

function searchMatrix1(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let x = 0, y = 1;
  while (x < n && y <= m) {
    if (matrix[m - y][x] === target) {
      return true;
    }
    if (matrix[m - y][x] < target) {
      x++;
    }
    if (matrix[m - y][x] > target) {
      y++;
    }
  }
  return false;
};

