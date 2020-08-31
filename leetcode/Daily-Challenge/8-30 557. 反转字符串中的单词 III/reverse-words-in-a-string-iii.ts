function reverseWords(s: string): string {
  const sArr: string[] = s.split(' ');
  const rArr = sArr.map(item => {
    return item.split('').reverse().join('');
  });
  return rArr.join(' ');
};