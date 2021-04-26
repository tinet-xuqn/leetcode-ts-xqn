function shipWithinDays(weights: number[], D: number): number {
  const maxValue: number = Math.max(...weights);
  const sum: number = weights.reduce(
    (acc, curr) => acc + curr,
    0
  );
  let left: number = maxValue;
  let right: number = sum;
  while (left < right) {
    let need: number = 1;
    let sum: number = 0;
    let mid: number = Math.floor((left + right) / 2);
    for (let i = 0; i < weights.length; i++) {
      if (sum + weights[i] <= mid) {
        sum += weights[i];
      } else {
        need++;
        sum = weights[i];
      }
    }
    if (need <= D) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
