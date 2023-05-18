function addNegabinary(arr1: number[], arr2: number[]): number[] {
  let i = arr1.length, j = arr2.length
  let res: number[] = [], carry = 0
  while (i > 0 || j > 0 || carry !== 0) {
    let x = (arr1[i - 1] || 0) + (arr2[j - 1] || 0) + carry
    if (x === -1) {
      res.unshift(1)
      carry = 1
    } else if (x >= 2) {
      res.unshift(x - 2)
      carry = -1
    } else {
      res.unshift(x)
      carry = 0
    }
    i--
    j--
  }
  while (res.length > 1) {
    if (res[0] === 0) {
      res.shift()
    } else {
      break
    }
  }
  return res
};
