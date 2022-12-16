function minElements(nums: number[], limit: number, goal: number): number {
  const sum: number = nums.reduce((pre, curr) => pre + curr, 0)
  const D: number = Math.abs((goal - sum))
  const count: number = Math.floor( D / limit)
  if (D % limit === 0) {
    return count
  }
  return count + 1
};
