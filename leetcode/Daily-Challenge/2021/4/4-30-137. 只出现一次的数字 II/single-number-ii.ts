function singleNumber(nums: number[]): number {
  const numsA: number[] = nums.sort((a, b) => a - b);
  if (numsA[0] !== numsA[1]) {
    return numsA[0];
  }
  const n = numsA.length;
  if (numsA[n - 1] !== numsA[n - 2]) {
    return numsA[n - 1];
  }
  for (let i = 3; i < n - 3; i++) {
    if (numsA[i] !== numsA[i - 1] && numsA[i] !== numsA[i + 1]) {
      return numsA[i];
    }
  }
};
