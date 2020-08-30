function shortestPalindrome(s: string): string {
  if (!s) {
    return '';
  }
  let sArr = s.split('');
  let rArr = s.split('').reverse();
  let i = 1;
  let l = s.length;
  while (sArr.toString() !== rArr.toString()) {
    sArr.splice(i - 1, 0, s[l - i]);
    rArr.splice(l, 0, s[l - i]);
    i++;
  }
  return rArr.join('');
};