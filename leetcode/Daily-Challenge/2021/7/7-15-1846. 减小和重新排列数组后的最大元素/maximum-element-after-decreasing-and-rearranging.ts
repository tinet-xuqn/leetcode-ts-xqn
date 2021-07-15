function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  let n = arr.length;
  arr.sort((a, b) => a -b);
  arr[0] = 1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      arr[i + 1] = arr[i] + 1;
    }
  }
  return arr[n - 1];
};
