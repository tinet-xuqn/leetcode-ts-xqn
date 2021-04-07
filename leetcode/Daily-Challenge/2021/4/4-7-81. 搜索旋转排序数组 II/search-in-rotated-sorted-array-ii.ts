function search(nums: number[], target: number): number {
  let len: number = nums.length;
  let left: number = 0;
  let right: number = len - 1;
  let mid: number = Math.floor((left + right) / 2);
  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
};

function search1(nums: number[], target: number): boolean {
  let len: number = nums.length;
  let left: number = 0;
  let right: number = len - 1;
  let mid: number = Math.floor((left + right) / 2);
  while (left <= right) {
    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] === nums[mid] && nums[left] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    mid = Math.floor((left + right) / 2);
  }
  return false;
};