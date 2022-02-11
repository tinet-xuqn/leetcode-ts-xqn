function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let len: number = nums.length
  let res: number = Infinity
  let l: number = 0
  let r: number = k - 1
  while (r < len) {
    res = Math.min(res, nums[r] - nums[l])
    l++
    r++
  }
  return res
};
