function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n: number = nums.length;
  let sum: number = 0;
  let left: number = 0;
  let res: number = 1;
  for (let right = 1; right < n; right++) {
    sum += (nums[right] - nums[right - 1]) * (right - left);
    while (sum > k) {
      sum -= nums[right] - nums[left];
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};
