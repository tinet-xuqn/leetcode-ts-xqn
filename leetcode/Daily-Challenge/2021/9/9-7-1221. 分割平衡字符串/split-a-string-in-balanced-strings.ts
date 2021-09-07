function balancedStringSplit(s: string): number {
  let L: number = 0;
  let R: number = 0;
  let res: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      L++;
    } else {
      R++;
    }
    if (L === R) {
      res++;
    }
  }
  return res;
};
