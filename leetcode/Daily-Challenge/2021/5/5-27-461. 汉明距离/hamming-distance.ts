function hammingDistance(x: number, y: number): number {
  let r = x ^ y;
  function countBits(n: number) {
    let count: number = 0;
    while (n !== 0) {
      n = n & (n - 1);
      count++;
    }
    return count;
  }
  return countBits(r);
};

function countBits(n: number) {
  let res = 0;
  while (n !== 0) {
    res += n & 1;
    n >>= 1;
  }
  return res;
}