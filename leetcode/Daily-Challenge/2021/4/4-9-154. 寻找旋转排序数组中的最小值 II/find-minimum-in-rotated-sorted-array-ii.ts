function findMin(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number = Math.floor((left + right) / 2);
  while (mid < right) {
    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right--;
    }
    mid = Math.floor((left + right) / 2);
  }
  return nums[left];
};
