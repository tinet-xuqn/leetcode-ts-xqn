function numTilePossibilities(tiles: string): number {
  const map: Map<string, number> = new Map()
  for (let i = 0; i < tiles.length; i++) {
    map.set(tiles[i], (map.get(tiles[i]) || 0) + 1)
  }
  return dfs(Array.from(map.values()))
  function dfs(arr: number[]) {
    let sum: number = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum++
        arr[i]--
        sum += dfs(arr)
        arr[i]++
      }
    }
    return sum
  }
};
