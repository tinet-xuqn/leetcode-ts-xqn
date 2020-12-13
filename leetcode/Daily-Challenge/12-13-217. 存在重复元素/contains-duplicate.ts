function containsDuplicate(nums: number[]): boolean {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      return true;
    } else {
      obj[nums[i]] = i;
    }
  }
  return false;
};

function containsDuplicate1(nums: number[]): boolean {
  const res = [...new Set(nums)];
  return res.length < nums.length;
};