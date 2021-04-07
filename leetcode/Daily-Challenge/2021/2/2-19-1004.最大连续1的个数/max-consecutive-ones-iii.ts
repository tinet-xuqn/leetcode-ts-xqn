function longestOnes(A: number[], K: number): number {
  let l = 0, r = 0, curLen = 0, res = 0;
  while (r < A.length) {
    switch (A[r]) {
      case 0:
        if (curLen >= K) {
          if (A[l] === 0) {
            curLen--;
          }
          l++;
        } else {
          curLen++;
          r++;
        }
        break;
      default:
        r++;
        break;
    }
    res = Math.max(res, r - l);
  }
	return res;
};

function longestOnes1(A: number[], K: number): number {
  let left = 0, right = 0, curCount = 0, res = 0;
  while (right < A.length) {
    if (A[right] === 0) {
      curCount++;
    }
    while (curCount > K) {
      if (A[left] === 0) {
        curCount--;
      }
      left++;
    }
    right++;
    res = Math.max(res, right - left);
  }
	return res;
};
