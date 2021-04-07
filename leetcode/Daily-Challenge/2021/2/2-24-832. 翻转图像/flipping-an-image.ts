function flipAndInvertImage(A: number[][]): number[][] {
  const m = A.length;
  for (let i = 0; i < m; i++) {
    let l = 0, r = m - 1;
    while (l <= r) {
      [A[i][l], A[i][r]] = [1 - A[i][r], 1 - A[i][l]]
      l++;
      r--;
    }
  }
  return A;
};

function flipAndInvertImage1(A: number[][]): number[][] {
  return A.map(item => {
    return item.reverse().map(inItem => {
      return 1 - inItem;
    })
  });
};
