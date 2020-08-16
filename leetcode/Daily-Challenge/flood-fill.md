### flood-fill

#### [图像渲染](https://leetcode-cn.com/problems/flood-fill/)

思路：新建一个队列，每次取一个元素，上下左右符合条件的进队列。队列为空时搜索结束


#### 初始版（错误)
```
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const color: number = image[sr][sc],
        width: number = image[0].length,
        height: number = image.length,
        queue: number[][] = [[sr, sc]];
  while (queue.length) {
    let item: number[] = <number[]>queue.shift(),
        sr = item[0],
        sc = item[1];
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
```

错误，这里没有考虑换成同样的像素情况。



#### 修正

```
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const color: number = image[sr][sc],
        width: number = image[0].length,
        height: number = image.length,
        queue: number[][] = [[sr, sc]];
  if (color === newColor) {
    return image;
  }
  while (queue.length) {
    let item: number[] = <number[]>queue.shift(),
        sr = item[0],
        sc = item[1];
    // [sr, sc] = <number[]>queue.pop(); 这里用解构赋值就很妙
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
```