function insert(intervals: number[][], newInterval: number[]): number[][] {
  let min: number = newInterval[0]
  let max: number = newInterval[1]
  let addS: boolean = false
  const res: number[][] = []
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < min) {
      res.push(intervals[i])
      continue
    }
    if (intervals[i][0] > max) {
      if (!addS) {
        res.push([min, max])
        addS = true
      }
      res.push(intervals[i])
      continue
    }
    min = Math.min(min, intervals[i][0])
    max = Math.max(max, intervals[i][1])
  }
  if (!addS) {
    res.push([min, max])
  }
  return res
};
