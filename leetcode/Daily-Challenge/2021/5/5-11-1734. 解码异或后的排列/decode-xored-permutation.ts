function decode(encoded: number[]): number[] {
  let l: number = encoded.length;
  let n: number = l + 1;
  let x: number = 0;
  let res: number[] = [];
  while (n > 0) {
    x = x ^ n;
    n--;
  }
  for (let i = 1; i < l; i += 2) {
    x = x ^ encoded[i];
  }
  res.push(x);
  for (let i = 0; i < l; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
};
