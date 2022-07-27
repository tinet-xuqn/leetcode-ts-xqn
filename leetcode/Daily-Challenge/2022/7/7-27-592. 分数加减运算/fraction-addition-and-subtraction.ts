function fractionAddition(expression: string): string {
  const n: number[] = [], d: number[] = [];
  const temp: string[] = expression.split('/');
  n.push(Number(temp.shift()));
  const last = Number(temp.pop())
  for (let i = 0; i < temp.length; i++) {
    const element = temp[i].split(/([+-]\d+)/);
    n.push(Number(element[1]))
    d.push(Number(element[0]))
  }
  d.push(last);
  const D: number = d.reduce(( previousValue, currentValue ) => previousValue * currentValue, 1)
  const N: number = n.reduce(
    ( previousValue, currentValue, currentIndex ) => previousValue + D / d[currentIndex] * currentValue,
    0
  );
  function GCD(n: number, d: number) {
    if (n % d === 0) {
      return d
    }
    return GCD(d, n % d)
  }
  const gcd: number = GCD(Math.abs(N), D);
  return N / gcd + '/' + D / gcd;
};
