function areNumbersAscending(s: string): boolean {
  let cur: number = 0
  const arr: string[] = s.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) {
      continue
    }
    const next: number = parseInt(arr[i])
    if (cur >= next) {
      return false
    }
    cur = next
  }
  return true
};
