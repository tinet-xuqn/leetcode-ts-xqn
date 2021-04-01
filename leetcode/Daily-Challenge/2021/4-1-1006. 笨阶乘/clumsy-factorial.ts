function clumsy(N: number): number {
  let count: number = Math.floor(N / 4);
  let re: number = N % 4;
  const resArr: number[] = [];
  for (let i = 0; i < count; i++) {
    const n1: number = N - 4 * i;
    const n2: number = n1 - 1;
    const n3: number = n1 - 2;
    const n4: number = n1 - 3;
    const item: number = Math.floor((n1 * n2) / n3);
    resArr.push(0 - item);
    resArr.push(n4);
  }
  switch (re) {
    case 0:
      break;
    case 1:
      resArr.push(-1);
      break;
    case 2:
      resArr.push(-2);
      break;
    case 3:
      resArr.push(-6);
      break;
    default:
      break;
  }
  return (0 - resArr[0]) * 2 + resArr.reduce((prev, curr) => prev + curr);
};

function clumsy1(N: number): number {
  const res: number[] = [N];
  for (let i = 1; i < N; i++) {
    const r: number = i % 4;
    switch (r) {
      case 1:
        res.push((N - i) * res.pop());
        break;
      case 2:
        const a = res.pop();
        const b = N - i;
        const c = a > 0 ? Math.floor(a / b) : Math.ceil(a / b);
        res.push(c);
        break;
      case 3:
        res.push(N - i);
        break;
      case 0:
        res.push(i - N);
        break;
      default:
        break;
    }
  }
  return res.reduce((prev, curr) => prev + curr);
};
