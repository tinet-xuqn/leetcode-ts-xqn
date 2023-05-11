function queryString(s: string, n: number): boolean {
  let x = n
  while (x >( n / 2)) {
    if (!s.includes(x.toString(2))) {
      return false
    }
    x--
  }
  return true
};