function calculate(s: string): number {
  let res: string[] = [];
  let i = 0;
  let m: string = '';
  while (i < s.length) {
    switch (s[i]) {
      case '+':
        if (m) {
          res.push(m);
          m = '';
        }
        res.push('+');
        break;
      case '-':
        if (m) {
          res.push(m);
          m = '';
        }
        res.push('-');
        break;
      case '*':
        if (m) {
          res.push(m);
          m = '';
        }
        res.push('*');
        break;
      case '/':
        if (m) {
          res.push(m);
          m = '';
        }
        res.push('/');
        break;
      default:
        m += s[i];
        break;
    }
    i++;
  }
  if (m) {
    res.push(m);
  }
  let arr: (number | string) [] = [];
  i = 0;
  while (i < res.length) {
    if (res[i] === '*') {
      arr.push(Number(arr.pop()) * Number(res[i + 1]));
      i = i + 2;
    } else if (res[i] === '/') {
      arr.push(Math.floor(Number(arr.pop()) / Number(res[i + 1])));
      i = i + 2;
    } else {
      arr.push(res[i]);
      i++;
    }
  }

  let sum = Number(arr[0]);
  if (arr[0] === '-' || arr[0] === '+') {
    sum = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+') {
      sum = sum + Number(arr[i + 1])
    } else if (arr[i] === '-') {
      sum = sum - Number(arr[i + 1])
    }
  }
  return sum;
};
