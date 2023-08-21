function canChange(start: string, target: string): boolean {
  let i = 0
  let j = 0
  let n = start.length
  while ((i < n) || (j < n)) {
    while ((i < n) && (start[i] === '_')) {
      i++
    }
    while ((target[j] === '_') && (j < n)) {
      j++
    }
    if (start[i] !== target[j]) {
      return false
    }
    if ((start[i] === 'L') && (i < j)) {
      return false
    }
    if ((start[i] === 'R') && (i > j)) {
      return false
    }
    i++
    j++
  }
  return true
};
