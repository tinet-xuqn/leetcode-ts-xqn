function judgeSquareSum(c: number): boolean {
  let max: number = Math.ceil(Math.sqrt(c));
  for (let i = 0; i <= max; i++) {
    let b = Math.sqrt(c - i * i);
    if (Number.isInteger(b)) {
      return true;
    }
  }
  return false;
};

function judgeSquareSum1(c: number): boolean {
  let b: number = Math.ceil(Math.sqrt(c));
  let a: number = 0;
  while (a <= b) {
    const sum: number = a * a + b * b;
    if (sum < c) {
      a++;
    }
    if (sum > c) {
      b--;
    }
    if (sum === c) {
      return true;
    }
  }
  return false;
};
