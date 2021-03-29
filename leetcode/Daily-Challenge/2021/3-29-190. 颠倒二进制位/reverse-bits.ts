function reverseBits(n: number): number {
	let count: number = 32, res = 0;
  while (count > 0) {
    res = res << 1;
    res = res + (n & 1);
    n = n >>> 1;
    count--;
  }
  return res >>> 0;
};
