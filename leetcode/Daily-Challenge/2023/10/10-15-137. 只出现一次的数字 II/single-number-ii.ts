function singleNumber(nums: number[]): number {
  const resMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (resMap.get(nums[i])) {
      resMap.set(nums[i], resMap.get(nums[i]) + 1)
    } else {
      resMap.set(nums[i], 1)
    }
  }
  const res = [...resMap.entries()].find(item => item[1] === 1)
  return Number(res[0])
};
