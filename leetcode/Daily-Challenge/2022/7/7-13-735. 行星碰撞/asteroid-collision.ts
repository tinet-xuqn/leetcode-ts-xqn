function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []
  const l: number = asteroids.length
  for (let i = 0; i < l; i++) {
    let alive: boolean = true
    while (
      alive
      && asteroids[i] < 0
      && stack.length
      && stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < Math.abs(asteroids[i])
      if (stack[stack.length - 1] <= Math.abs(asteroids[i])) {
        stack.pop()
      }
    }
    if (alive) {
      stack.push(asteroids[i])
    }
  }
  return stack
};
