function minCostToMoveChips(position: number[]): number {
  let oddCount: number = 0
  let evenCount: number = 0
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      evenCount++
    } else {
      oddCount++
    }
  }
  return Math.min(oddCount, evenCount)
};
