function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let left: number = 0;
  let right: number = nums.length - 1;
  let res: number = 0;
  while (left < right) {
    res = Math.max(res, nums[left] + nums[right]);
    left++;
    right--;
  }
  return res;
};
