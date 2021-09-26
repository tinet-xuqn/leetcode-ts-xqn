function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry: number = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};
