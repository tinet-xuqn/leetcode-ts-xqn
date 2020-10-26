function smallerNumbersThanCurrent(nums: number[]): number[] {
  const res: number[] = [];
  for (let j = 0; j < nums.length; j++) {
    res[j] = 0;
    let item: number = nums[j];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < item) {
        res[j]++;
      }
    }
  }
  return res;
};