function largestNumber(nums: number[]): string {
  const res = nums.sort((a, b) => {
    if (a + '' + b > b + '' + a) {
      return -1;
    }
    return 1;
  }).join('');
  return res.startsWith('0') ? '0' : res;
};
