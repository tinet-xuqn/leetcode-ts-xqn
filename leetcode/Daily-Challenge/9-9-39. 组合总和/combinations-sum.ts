function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const len: number = candidates.length;
  function dfs(start: number, arr: number[], sum: number) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      result.push([...arr])
      return
    }
    for (let i = start; i < len; i++) {
      arr.push(candidates[i]);
      dfs(i, arr, sum + candidates[i]);
      arr.pop();
    }
  }
  dfs(0, [], 0);
  return result;
};