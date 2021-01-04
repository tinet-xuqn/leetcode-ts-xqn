function backspaceCompare(S: string, T: string): boolean {
  const SArr = [];
  const TArr = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      SArr.pop();
      continue;
    }
    SArr.push(S[i]);
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === '#') {
      TArr.pop();
      continue;
    }
    TArr.push(T[i]);
  }

  return SArr.join() === TArr.join();
};