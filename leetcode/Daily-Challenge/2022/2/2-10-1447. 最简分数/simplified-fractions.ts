function simplifiedFractions(n: number): string[] {
  const res: string[] = []
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (gcd(j, i) === 1) {
        res.push(i + '/' + j)
      }
    }
  }
  return res
};

function gcd(a: number, b: number) {
  if (a % b === 0) {
    return b
  }
  return gcd(b, a % b)
}