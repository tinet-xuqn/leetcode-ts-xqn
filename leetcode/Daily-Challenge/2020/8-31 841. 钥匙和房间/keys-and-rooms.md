#### [841. 钥匙和房间](https://leetcode-cn.com/problems/keys-and-rooms/)



#### 思路

从第一个房间开始，将钥匙全部放在一个Set中，然后将对应房间的钥匙全部放入队列中。

从队列中按个取钥匙，重复的跳过。

不重复的执行步骤1，最后Set的长度就是能进的房间数。



```typescript
function canVisitAllRooms(rooms: number[][]): boolean {
  const res: Set<number> = new Set([0]);
  let queue: number[] = rooms[0];
  while (queue.length) {
    const key: number = queue.pop() as number;
    if (res.has(key)) {
      continue;
    }
    queue = queue.concat(rooms[key]);
    res.add(key);
  }
  return res.size === rooms.length;
};
```

