function findLUSlength(strs: string[]): number {
  const len:number = strs.length
  let res: number = -1
  for (let i = 0; i < len; i++) {
    let check: boolean = true
    for (let j = 0; j < len; j++) {
      if ((i !== j) && isSubseq(strs[i], strs[j])) {
        check = false
        break
      }
    }
    if (check) {
      res = Math.max(strs[i].length, res)
    }
  }
  return res
};

function isSubseq(str1: string, str2: string) {
  if (str1.length > str2.length) {
    return false
  }
  let i: number = 0
  let j: number = 0
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++
    }
    j++
    if (i === str1.length) {
      return true
    }
  }
  return false
}