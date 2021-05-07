function xorOperation(n: number, start: number): number {
  let res: number = 0;
  for (let i = 0; i < n; i++) {
    res = res ^ (start + 2 * i);
  }
  return res;
};
