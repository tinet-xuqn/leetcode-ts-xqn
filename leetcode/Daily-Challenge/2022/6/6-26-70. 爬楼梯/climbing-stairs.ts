function climbStairs(n: number, ac1 = 1, ac2 = 2): number {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return ac2
  }
  return climbStairs(n - 1, ac2, ac1 + ac2)
};