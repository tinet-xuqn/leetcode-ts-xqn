function reorganizeString(S: string): string {
  const l = S.length;
  const obj = {};
  let max = 0;
  for (let i = 0; i < S.length; i++) {
    if (obj[S[i]]) {
      obj[S[i]]++
    } else {
      obj[S[i]] = 1
    }
    max = max > obj[S[i]] ? max : obj[S[i]]
  }
  const allowMax = (l + 1) / 2;
  if (max > Math.floor(allowMax)) {
    return ''
  }
  const arr = []
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push({
        label: key,
        value: obj[key]
      });
    }
  }

};