function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);
  const res: number[][] = [];
  const len: number = candidates.length;
  function dfs(start: number, arr: number[], sum: number) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push([...arr]);
      return
    }
    for (let i = start; i < len; i++) {
      if (candidates[i - 1] === candidates[i] && i - 1 >= start) {
        continue;
      }
      arr.push(candidates[i]);
      dfs(i + 1, arr, sum + candidates[i]);
      arr.pop()
    }
  }
  dfs(0, [], 0);
  return res;
};