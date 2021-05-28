function totalHammingDistance(nums: number[]): number {
  let res: number = 0, l = nums.length;
  for (let i = 0; i < 30; i++) {
    let c = 0;
    for (const n of nums) {
      c += (n >> i) & 1;
    }
    res += c * (l - c);
  }
  return res;
};
