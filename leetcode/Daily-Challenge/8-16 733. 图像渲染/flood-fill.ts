function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const color: number = image[sr][sc],
        width: number = image[0].length,
        height: number = image.length,
        queue: number[][] = [[sr, sc]];
  if (color === newColor) {
    return image;
  }
  while (queue.length) {
    [sr, sc] = <number[]>queue.pop();
    if (image[sr][sc] === color) {
      image[sr][sc] = newColor;
      if (sr - 1 >= 0) {
        queue.push([sr - 1, sc]);
      }
      if (sr + 1 < height ) {
        queue.push([sr + 1, sc])
      }
      if (sc - 1 >= 0) {
        queue.push([sr, sc - 1]);
      }
      if (sc + 1 < width) {
        queue.push([sr, sc + 1]);
      }
    }
  }
  return image;
};