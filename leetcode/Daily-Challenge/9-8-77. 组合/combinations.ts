function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  function dfs(start: number, arr: number[]) {
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      arr.push(i);
      dfs(i + 1, arr);
      arr.pop();
    }
  }
  dfs(1, []);
  return res;
};