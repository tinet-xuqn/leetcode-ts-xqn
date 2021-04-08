function findMin(nums: number[]): number {
  const n: number = nums.length;
  let left: number = 0;
  let right: number = n - 1;
  let mid: number = Math.floor((left + right) / 2);
  while (left < right) {
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = left + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return nums[left];
};
