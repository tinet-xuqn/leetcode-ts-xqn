function removeDuplicates(nums: number[]): number {
  let l: number = nums.length;
  let left: number = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] !== nums[left]) {
      left++;
      nums[left] = nums[i];
    }
  }
  return left + 2;
};
