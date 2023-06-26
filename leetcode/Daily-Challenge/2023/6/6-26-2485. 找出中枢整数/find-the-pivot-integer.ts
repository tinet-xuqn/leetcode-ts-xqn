function pivotInteger(n: number): number {
  const x: number = Math.sqrt((1 + n) / 2 * n)
  if (Number.isInteger(x)) {
    return x
  }
  return -1
};
