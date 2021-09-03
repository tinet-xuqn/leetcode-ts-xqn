function smallestK(arr: number[], k: number): number[] {
  const res = quickSort(arr);
  res.length = k;
  return res;
};

function quickSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot: number = arr.pop();
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}