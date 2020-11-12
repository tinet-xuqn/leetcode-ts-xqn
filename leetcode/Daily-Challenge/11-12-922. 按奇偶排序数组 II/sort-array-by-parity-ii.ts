function sortArrayByParityII(A: number[]): number[] {
  const l = A.length;
  const B: number[] = [];
  const C: number[] = [];
  for (let i = 0; i < l; i++) {
    if (A[i] % 2 === 0) {
      C.push(A[i]);
    } else {
      B.push(A[i]);
    }
  }
  A = [];
  while (C.length) {
    A.push(C.pop() as number);
    A.push(B.pop() as number);
  }
  return A;
};