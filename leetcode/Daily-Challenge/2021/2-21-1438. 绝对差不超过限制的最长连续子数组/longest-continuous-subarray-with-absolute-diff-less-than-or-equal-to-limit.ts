function longestSubarray(nums: number[], limit: number): number {
  let len = 0, minIndex = 0, maxIndex = 0, left = 0, right = 0, curD = [];
  while (right < nums.length) {
    if (nums[right] > nums[maxIndex]) {
      maxIndex = right;
      while (nums[maxIndex] - nums[minIndex] > limit) {
        curD = nums.slice(minIndex + 1, right + 1);
        let min = Math.min(...curD);
        minIndex = nums.indexOf(min, minIndex + 1);
        left = minIndex;
      }
    } else if (nums[right] < nums[minIndex]) {
      minIndex = right;
      while (nums[maxIndex] - nums[minIndex] > limit) {
        curD = nums.slice(maxIndex + 1, right + 1);
        let max = Math.max(...curD);
        maxIndex = nums.indexOf(max, maxIndex + 1);
        left = maxIndex;
      }
    }
    right++;
    len = Math.max(len, right - left);
  }
  return len;
};
