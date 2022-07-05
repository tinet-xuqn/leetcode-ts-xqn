function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let min: number = arr[1] - arr[0]
  let res: number[][] = [[arr[0], arr[1]]]
  for (let i = 1; i < arr.length - 1; i++) {
    let dif: number = arr[i + 1] - arr[i]
    if (dif < min) {
      min = dif
      res = []
    }
    if (dif === min) {
      res.push([arr[i], arr[i + 1]])
    }
  }
  return res
};
