function splitNum(num: number): number {
  const str: string = String(num)
  const arr: string[] = str.split('').sort()
  let num1: string = ''
  let num2: string = ''
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      num1 += arr[i]
    } else {
      num2 += arr[i]
    }
  }
  return parseInt(num1) + parseInt(num2)
};
