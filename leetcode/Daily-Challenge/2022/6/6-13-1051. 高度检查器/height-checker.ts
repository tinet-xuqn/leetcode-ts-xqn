function heightChecker(heights: number[]): number {
  const expected: number[] = [...heights].sort((a, b) => a - b);
  let count: number = 0
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== heights[i]) {
      count++;
    }
  }
  return count;
};
