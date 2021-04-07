function longestSubarray(nums: number[], limit: number): number {
  let len = -1,
      minQueue: number[] = [],
      maxQueue: number[] = [],
      left = 0,
      right = 0;
  while (right < nums.length) {
    while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
      minQueue.pop();
    }
    minQueue.push(nums[right]);

    while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
      maxQueue.pop();
    }
    maxQueue.push(nums[right]);

    while (maxQueue[0] - minQueue[0] > limit) {
      if (maxQueue[0] === nums[left]) {
        maxQueue.shift();
      }
      if (minQueue[0] === nums[left]) {
        minQueue.shift();
      }
      left++;
    }
    right++;
    len = Math.max(len, right - left);
  }
  return len;
};

function longestSubarray1(nums: number[], limit: number): number {
  let len = -1,
      minQueue: number[] = [],
      maxQueue: number[] = [],
      left = 0,
      right = 0;
  while (right < nums.length) {
    while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
      minQueue.pop();
    }
    minQueue.push(nums[right]);

    while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
      maxQueue.pop();
    }
    maxQueue.push(nums[right]);

    // 保持窗口大小不变
    if (maxQueue[0] - minQueue[0] > limit) {
      if (maxQueue[0] === nums[left]) {
        maxQueue.shift();
      }
      if (minQueue[0] === nums[left]) {
        minQueue.shift();
      }
      left++;
    } else {
      len = right - left + 1;
    }
    right++;
  }
  return len;
};

