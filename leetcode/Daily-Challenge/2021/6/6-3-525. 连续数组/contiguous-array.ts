function findMaxLength(nums: number[]): number {
  const xorArr: number [] = [0];
  let l: number = nums.length;
  let rl: number = nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i] === 1) {
      xorArr[i + 1] = xorArr[i] + 1;
    } else {
      xorArr[i + 1] = xorArr[i];
    }
  }
  if (rl % 2 !== 0) {
    rl = rl - 1;
  }
  while (rl > 0) {
    for (let i = 0; i + rl <= l; i++) {
      if ((xorArr[i + rl] - xorArr[i]) === rl / 2) {
        return rl;
      }
    }
    rl -= 2;
  }
  return rl;
};
function findMaxLength1(nums: number[]): number {
  const map: Map<number, number> = new Map();
  map.set(0, -1);
  let l: number = nums.length;
  let sum: number = 0;
  let maxL: number = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] === 0) {
      sum += -1;
    } else {
      sum += 1;
    }
    if (map.has(sum)) {
      maxL = Math.max(maxL, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxL;
};
