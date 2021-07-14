function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const n: number = nums1.length;
  let sum: number[][] = [];
  for (let i = 0; i < n; i++) {
    sum.push([
      Math.abs(nums1[i] - nums2[i]),
      nums1[i],
      nums2[i]]);
  }
  sum.sort((a, b) => {
    return (b[0] - a[0]);
  });
  nums1.sort((a, b) => a - b);
  const item = sum[0];
  if (item[2] <= nums1[0]) {
    item[0] = Math.abs(nums1[0] - item[2]);
  } else if (item[2] >= nums1[n - 1]) {
    item[0] = Math.abs(nums1[n - 1] - item[2]);
  } else {
    console.log(nums1);
    for (let i = 0; i < n; i++) {
      if (item[2] <= nums1[i + 1]) {
        item[0] = Math.min(Math.abs(item[2] - nums1[i]), Math.abs(item[2] - nums1[i + 1]));
        break;
      }
    }
  }
  console.log(sum , item);
  return sum.reduce(
    (acc, cur) => acc + cur[0],
    0
  ) % (10^9 + 7);
};
