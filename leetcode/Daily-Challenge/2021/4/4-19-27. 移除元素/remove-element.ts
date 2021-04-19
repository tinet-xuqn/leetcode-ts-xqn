function removeElement(nums: number[], val: number): number {
  const l: number = nums.length;
  let left: number = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] !== val) {
      nums[left] = nums[i];
      left++;
    }
  }
  return left;
};
