/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
  const arr: number[] = [...nums].sort((a, b) => a - b)
  const n: number = nums.length
  const x: number = Math.ceil(n / 2)
  for (let i = 0, j = x - 1, k = n - 1; i < n; i += 2, j--, k--) {
    nums[i] = arr[j]
    if (i + 1 < n) {
      nums[i + 1] = arr[k]
    }
  }
};
