function ambiguousCoordinates(s: string): string[] {
  const res: string[] = []
  const numberS: string = s.slice(1, -1)
  for (let i = 1; i < numberS.length; i++) {
    const left: string = numberS.slice(0, i)
    const right: string = numberS.slice(i)
    if (isValid(left) && isValid(right)) {
      const leftA: string[] = getArr(left)
      const leftB: string[] = getArr(right)
      leftA.forEach(element => {
        leftB.forEach(item => {
          res.push('(' + element + ', ' + item + ')')
        })
      })
    }
  }
  return res
};

function isValid(s: string): boolean {
  if (s.length === 1) {
    return true
  }
  return !(s.startsWith('0') && s.endsWith('0'))
}

function getArr(s: string): string[] {
  if (s === '0' || s.endsWith('0')) {
    return [s]
  }
  if (s.startsWith('0')) {
    return ['0.' + s.slice(1)]
  }
  const res: string[] = [s]
  for (let i = 1; i < s.length; i++) {
    res.push(s.slice(0, i) + '.' + s.slice(i))
  }
  return res
}