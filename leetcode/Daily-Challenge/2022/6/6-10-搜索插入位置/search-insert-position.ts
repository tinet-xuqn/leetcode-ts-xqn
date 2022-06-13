function searchInsert(nums: number[], target: number): number {
  const len: number = nums.length
  let left = 0
  let right = len - 1
  let mid = Math.floor((left + right) / 2)
  while (left < right) {
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
    mid = Math.floor((left + right) / 2)
  }
  if (nums[mid] < target) {
    return mid + 1
  } else {
    return mid
  }
};