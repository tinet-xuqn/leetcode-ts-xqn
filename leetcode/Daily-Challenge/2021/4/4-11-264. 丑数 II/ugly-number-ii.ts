function nthUglyNumber(n: number): number {
  const uArr: number[] = new Array(n + 1).fill(0);
  uArr[1] = 1;
  let p2 = 1, p3 = 1, p5 = 1;
  for (let i = 2; i <= n; i++) {
    const num2 = uArr[p2] * 2;
    const num3 = uArr[p3] * 3;
    const num5 = uArr[p5] * 5;
    uArr[i] = Math.min(num2, num3, num5);
    if (uArr[i] === num2) {
      p2++;
    }
    if (uArr[i] === num3) {
      p3++;
    }
    if (uArr[i] === num5) {
      p5++;
    }
  }
  return uArr[n];
};
