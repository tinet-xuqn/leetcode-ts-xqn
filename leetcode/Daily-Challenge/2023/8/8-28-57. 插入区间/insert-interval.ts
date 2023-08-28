function insert(intervals: number[][], newInterval: number[]): number[][] {
  const min: number = newInterval[0]
  const max: number = newInterval[1]

  const left: number = intervals.findIndex(item => {
    return (item[0] >= min) || (item[1] >= min)
  })
  const right: number = intervals.findIndex(item => {
    return (item[0] >= max) || (item[1] >= max)
  })
  if (left === right) {
    if (max < intervals[left][0]) {
      intervals.splice(left, 0, newInterval)
    } else {
      intervals.splice(left, 1, [min, intervals[left][1]])
    }
    return intervals
  }

  
  return intervals
};
