function isPowerOfFour(n: number): boolean {
  while (n > 1) {
    if (n % 4 === 0) {
      n = n / 4;
    } else {
      return false;
    }
  }
  return n === 1;
};

function isPowerOfFour1(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
};

