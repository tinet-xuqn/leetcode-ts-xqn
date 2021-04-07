function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  let res: number = 0, extraRes: number = 0, curExtra: number = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      res += customers[i];
    }
  }
  for (let i = 0; i < X; i++) {
    if (grumpy[i] === 1) {
      extraRes += customers[i];
    }
  }
  curExtra = extraRes;
  for (let i = X; i < customers.length; i++) {
    if (grumpy[i - X] === 1) {
      curExtra = curExtra - customers[i - X];
    }
    if (grumpy[i] === 1) {
      curExtra = curExtra + customers[i];
    }
    extraRes = Math.max(extraRes, curExtra);
  }
  return res + extraRes;
};
