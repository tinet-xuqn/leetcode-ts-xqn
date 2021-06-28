function permutation(s: string): string[] {
  const res: Set<string> = new Set();
  const visited: object = {};
  function dfs(path: string = '') {
    if (path.length === s.length) {
      res.add(path);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      dfs(path + s[i]);
      visited[i] = false;
    }
  }
  dfs();
  return [...res];
};
