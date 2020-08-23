function rangeBitwiseAnd(m: number, n: number): number {
  let shift = 0;
  while (m < n) {
    m = m >> 1;
    n = n >> 1;
    shift++;
  }
  return m << shift;
};

function rangeBitwiseAnd2(m: number, n: number): number {
  while (m < n) {
    n = n & (n - 1);
  }
  return n;
};