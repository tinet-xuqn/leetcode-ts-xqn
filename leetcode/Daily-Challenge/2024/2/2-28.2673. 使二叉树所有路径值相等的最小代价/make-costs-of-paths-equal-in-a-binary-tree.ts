function minIncrements(n: number, cost: number[]): number {
  let res: number = 0
  for (let i = n - 2; i > 0; i = i - 2) {
    res = res + Math.abs(cost[i] - cost[i + 1])

    // 下标+1是第几个，除以2得到的也是第几个，下标需要-1
    const f = (i + 1) / 2 - 1
    cost[f] = cost[f] + Math.max(cost[i], cost[i + 1])
  }
  return res
};
