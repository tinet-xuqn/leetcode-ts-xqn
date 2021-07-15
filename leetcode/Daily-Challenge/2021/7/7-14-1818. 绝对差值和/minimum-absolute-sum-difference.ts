function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const n: number = nums1.length;
  const sortedNums1: number[] = [...nums1].sort((a, b) => a - b);
  let sum: number = 0;
  let maxDiff: number = 0;
  for (let i = 0; i < n; i++) {
    const Dvalue: number = Math.abs(nums2[i] - nums1[i]);
    sum += Dvalue;
    const min = find(nums2[i], sortedNums1, n);
    maxDiff = Math.max(maxDiff, Dvalue - min);
  }
  return (sum - maxDiff) % 1000000007;
};

function find(target: number, nums: number[], length: number) {
  let left: number = 0, leftVal: number = nums[left];
  let right: number = length - 1, rightVal: number = nums[right];
  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
      leftVal = nums[mid];
    } else if (nums[mid] > target) {
      right = mid - 1;
      rightVal = nums[mid];
    } else {
      return 0;
    }
  }
  const leftabs: number = Math.abs(target - leftVal);
  const rightabs: number = Math.abs(target - rightVal);
  return Math.min(leftabs, rightabs);
}