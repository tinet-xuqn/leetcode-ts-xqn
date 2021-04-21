function numDecodings(s: string): number {
  const n: number = s.length;
  const f: number[] = new Array(n + 1).fill(0);
  f[0] = 1;
  for (let i = 1; i <= n; i++) {
    if (s[i - 1] !== '0') {
      f[i] = f[i - 1];
    }
    if (i > 1 && s[i - 2] !== '0' && (10 * Number(s[i - 2]) + Number(s[i - 1]) <= 26)) {
      f[i] = f[i] + f[i - 2];
    }
  }
  return f[n];
};
