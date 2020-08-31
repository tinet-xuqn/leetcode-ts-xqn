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