function isMonotonic(A: number[]): boolean {
  const len: number = A.length;
  if (len === 1) {
    return true;
  }

  if (A[len - 1] >= A[0]) {
    for (let i = 0; i < len - 1; i++) {
      if (A[i] > A[i + 1]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < len - 1; i++) {
      if (A[i] < A[i + 1]) {
        return false;
      }
    }
  }
  return true;
};

function isMonotonic1(A: number[]): boolean {
  const len: number = A.length;
  let decrase = true, incrase = true;
  if (len === 1) {
    return true;
  }
  for (let i = 0; i < len - 1; i++) {
    if (A[i] < A[i + 1]) {
      decrase = false;
    }
    if (A[i] > A[i + 1]) {
      incrase = false;
    }
  }
  return decrase || incrase;
};

