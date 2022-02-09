function removeDuplicates(nums: number[]): number {
  let l = 0;
  let r = 1;
  while (r < nums.length) {
    if (nums[l] < nums[r]) {
      l++
      nums[l] = nums[r]
    }
    r++
  }
  return l + 1
};
