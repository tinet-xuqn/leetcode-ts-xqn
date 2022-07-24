function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  if (start === destination) {
    return 0;
  }
  const min: number = Math.min(start, destination)
  const max: number = Math.max(start, destination)
  let res1 = 0
  let res2 = 0
  for (let i = 0; i < distance.length; i++) {
    if (i >= min && i < max) {
      res1 += distance[i]
    } else {
      res2 += distance[i]
    }
  }
  return Math.min(res1, res2)
};
