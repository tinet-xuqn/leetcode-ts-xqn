function removeDuplicates(nums: number[]): number {
  const mapA = new Map();
  for (let i = 0; i < nums.length;) {
    const element = nums[i];
    if (mapA.has(element)) {
      mapA.set(element, mapA.get(element) + 1);
      if (mapA.get(element) > 2) {
        nums.splice(i, 1);
      } else {
        i++;
      }
    } else {
      mapA.set(element, 1);
      i++;
    }
  }
  return nums.length;
};

function removeDuplicates1(nums: number[]): number {
  const len = nums.length;
  if (len <= 2) {
    return len;
  }
  let left: number = 2;
  let right: number = 2;
  while (right < len) {
    if (nums[left - 2] === nums[right]) {
      right++;
    } else {
      nums[left] = nums[right];
      left++;
      right++;
    }
  }
  return left;
};

