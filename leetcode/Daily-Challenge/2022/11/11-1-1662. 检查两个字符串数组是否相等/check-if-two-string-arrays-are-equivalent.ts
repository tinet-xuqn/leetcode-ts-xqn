function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const str1: string = word1.reduce((pre, next) => {
    return pre + next
  })
  const str2: string = word2.reduce((pre, next) => {
    return pre + next
  })
  return str1 === str2
};

function arrayStringsAreEqual1(word1: string[], word2: string[]): boolean {
  let p1: number = 0
  let l1: number = word1.length
  let p2: number = 0
  let l2: number = word2.length
  let i: number = 0
  let j: number = 0
  while (p1 < l1 && p2 < l2) {
    if (word1[p1][i] !== word2[p2][j]) {
      return false
    }
    i++
    if (i === word1[p1].length) {
      p1++
      i = 0
    }
    j++
    if (j === word2[p2].length) {
      p2++
      j = 0
    }
  }
  return p1 === l1 && p2 === l2
};