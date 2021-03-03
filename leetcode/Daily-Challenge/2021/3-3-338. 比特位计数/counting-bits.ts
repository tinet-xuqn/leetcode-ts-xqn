function countBits(num: number): number[] {
  const res: number[] = [];
  for (let i = 0; i <= num; i++) {
    res.push((i.toString(2).match(/1/g) || []).length);
  }
  return res;
};
