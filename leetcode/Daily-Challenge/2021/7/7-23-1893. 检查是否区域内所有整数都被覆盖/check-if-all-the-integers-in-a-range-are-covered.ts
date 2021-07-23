function isCovered(ranges: number[][], left: number, right: number): boolean {
  const set: Set<number> = new Set();
  for (let i = 0; i < ranges.length; i++) {
    const element = ranges[i];
    const l: number = element[0];
    const r: number = element[1];
    for (let j = l; j <= r; j++) {
      set.add(j);
    }
  }
  for (let k = left; k <= right; k++) {
    if (!set.has(k)) {
      return false;
    }
  }
  return true;
};
