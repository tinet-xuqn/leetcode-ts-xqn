function minimumTimeRequired(jobs: number[], k: number): number {
  // 降序排列
  jobs = jobs.sort((a, b) => b - a);
  let left: number = jobs[0];
  let right: number = jobs.reduce((pre, curr) => pre + curr);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (check(jobs, k, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
function check(jobs: number[], k: number, max: number) {
  const works: number[] = new Array(k).fill(0);
  return backtrack(jobs, works, 0, max);
}
function backtrack(jobs: number[], works: number[], i: number, max: number) {
  if (i >= jobs.length) {
    return true;
  }
  let cur: number = jobs[i];
  for (let j = 0; j < works.length; j++) {
    if (works[j] + cur <= max) {
      works[j] += cur;
      if (backtrack(jobs, works, i + 1, max)) {
        return true;
      }
      works[j] -= cur;
    }

    if (works[j] === 0 || works[j] + cur === max) {
      break;
    }
  }
  return false;
}