function reverseParentheses(s: string): string {
  let stack = [];
  let str: string = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(str);
      str = '';
    } else if (s[i] === ')') {
      let middleS = stack.pop();
      str = middleS + str.split('').reverse().join('');
    } else {
      str += s[i];
    }
  }
  return str;
};
