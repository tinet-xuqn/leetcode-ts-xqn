function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => a - b)
  let sumA: number = 0, sumB: number = 0
  let res: number[] = []
  sumA = nums.reduce((pre, next) => pre + next, 0)
  while (sumB <= sumA) {
    const item: number = <number>nums.pop()
    sumB += item
    sumA -= item
    res.push(item)
  }
  return res
};
