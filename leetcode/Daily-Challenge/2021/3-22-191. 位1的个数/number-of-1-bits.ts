function hammingWeight(n: number): number {
  let count: number = 0;
  while (n !== 0) {
    if (n & 1) {
      count++;
    }
    n = n >>> 1;
  }
  return count;
};

function hammingWeight1(n: number): number {
  let count: number = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      count++;
    }
  }
  return count;
};

function hammingWeight2(n: number): number {
  let count: number = 0;
  while (n !== 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
};
