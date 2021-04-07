function findShortestSubArray(nums: number[]): number {
  let maxNum = 0, minLen = 0, obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else{
      obj[nums[i]] = 1;
    }
    if (obj[nums[i]] > maxNum) {
      maxNum = obj[nums[i]];
      const first = nums.indexOf(nums[i]);
      minLen = i - first + 1;
    } else if (obj[nums[i]] === maxNum) {
      const first = nums.indexOf(nums[i]);
      minLen = Math.min(minLen, i - first + 1);
    }
  }
  return minLen;
};

function findShortestSubArray1(nums: number[]): number {
  let maxNum = 0, minLen = 0, obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]][0]++;
    } else{
      obj[nums[i]] = [1, i, i];
    }
    if (obj[nums[i]][0] > maxNum) {
      maxNum = obj[nums[i]][0];
      minLen = i - obj[nums[i]][1] + 1;
    } else if (obj[nums[i]][0] === maxNum) {
      minLen = Math.min(minLen, i - obj[nums[i]][1] + 1);
    }
  }
  return minLen;
};
