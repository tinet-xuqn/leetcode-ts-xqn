function calculate(s: string): number {
  s = s.replace(/\s*/g, '');
  const result = [];
  let i = 0;
  let m = '';

  while (i < s.length) {
    switch (s[i]) {
      case ')':
        result.push(m);
        m = '';
        let arr = [];
        while (result[result.length - 1] !== '(') {
          arr.unshift(result.pop());
        }
        result[result.length - 1] = add(arr);
        break;
      case '(':
        if (m) {
          result.push(m);
          m = '';
        }
        result.push(s[i]);
        break;
      case '+':
        if (m) {
          result.push(m);
          m = '';
        }
        result.push(s[i]);
        break;
      case '-':
        if (m) {
          result.push(m);
          m = '';
        }
        result.push(s[i]);
        break;
      default:
        m += s[i];
        break;
    }
    i++;
  }
  result.push(m);
  return add(result);
};

function add(arr: string[]) {
  let res = Number(arr[0]);
  if (arr[0] === '-' || arr[0] === '+') {
    res = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+') {
      res = res + Number(arr[i + 1])
    } else if (arr[i] === '-') {
      res = res - Number(arr[i + 1])
    }
  }
  return res;
}