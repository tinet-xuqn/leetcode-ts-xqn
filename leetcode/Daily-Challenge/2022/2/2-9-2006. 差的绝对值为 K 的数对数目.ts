function countKDifference(nums: number[], k: number): number {
  const len: number = nums.length
  let counts: number = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        counts++
      }
    }
  }
  return counts
};