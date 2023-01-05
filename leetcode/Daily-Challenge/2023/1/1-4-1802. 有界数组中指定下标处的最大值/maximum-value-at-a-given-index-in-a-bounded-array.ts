function maxValue(n: number, index: number, maxSum: number): number {
  let left: number = index
  let right: number = n - 1 - index
  if (left > right) {
    [ left, right ] = [ right, left ]
  }
  let x = left + 1
  let min: number = x*x -2 * x + n + 1
  if (maxSum <= min) {
    const a = 1
    const b = -2
    const c = n + 1 - maxSum
    return Math.floor((Math.sqrt(b*b - 4*a*c) - b) / (2 * a))
  }
  min = (2 * (right + 1) - left - 1) * left / 2 + (right + 1) + ((right + 1) * (right + 1) - 3 * (right + 1)) / 2 + right + 1
  if (maxSum <= min) {
  let a = 1.0 / 2;
    let b = left + 1 - 3.0 / 2;
    let c = right + 1 + (-left - 1) * left / 2 - maxSum;
    return Math.floor((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  } else {
    let a = left + right + 1;;
    let b = (-left * left - left - right * right - right) / 2 - maxSum;
    return Math.floor(-b / a);
  }
};

function maxValue(n: number, index: number, maxSum: number): number {
  let left: number = 1
  let right: number = maxSum
  while (left < right) {
    const mid: number = Math.floor((left + right + 1) / 2)
    if (valid(mid, n, index, maxSum)) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
};
function valid(mid: number, n: number, index: number, maxSum: number) {
  let left: number = index
  let right: number = n - 1 - index
  return mid + cal(mid, left) + cal(mid, right) <= maxSum
}
function cal(max: number, length: number): number {
  if (length + 1 < max) {
    const first: number = max - length
    return Math.floor((first + max - 1) * length / 2)
  } else {
    const ones: number = length - (max - 1)
    return Math.floor((1 + max - 1) * (max - 1) / 2) + ones
  }
}