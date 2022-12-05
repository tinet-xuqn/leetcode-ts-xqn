function secondHighest(s: string): number {
  let fh: number = -1
  let sh: number = -1
  for (let i = 0; i < s.length; i++) {
    if ('0' <= s[i] && s[i] <= '9') {
      const n = parseInt(s[i])
      if (n > fh) {
        sh = fh
        fh = n
      } else if (n < fh && n > sh) {
        sh = n
      }
    }
  }
  return sh
};
