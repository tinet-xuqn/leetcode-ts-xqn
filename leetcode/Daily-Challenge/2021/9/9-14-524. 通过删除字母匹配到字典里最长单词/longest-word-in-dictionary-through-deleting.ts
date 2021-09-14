function findLongestWord(s: string, dictionary: string[]): string {
  let res = '';
  for (let i = 0; i < dictionary.length; i++) {
    const item = dictionary[i];
    let j = 0;
    let k = 0;
    while (j < s.length && k < item.length) {
      if (s[j] === item[k]) {
        k++;
      }
      j++;
    }
    if (k === item.length) {
      if (item.length > res.length) {
        res = item
      } else if (item.length === res.length && res > item) {
        res = item
      }
    }
  }
  return res;
};
