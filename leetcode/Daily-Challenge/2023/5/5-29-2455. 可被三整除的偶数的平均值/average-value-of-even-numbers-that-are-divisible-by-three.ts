function averageValue(nums: number[]): number {
  let res = 0
  let n = 0
  for (let a of nums) {
    if (a % 6 === 0) {
      res += a;
      n++;
    }
  }
  return res ? Math.floor(res / n) : 0
};
