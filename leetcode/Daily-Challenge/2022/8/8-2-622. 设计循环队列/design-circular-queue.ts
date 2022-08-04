class MyCircularQueue {
  value: number[] = []
  head: number = 0
  tail: number = 0
  k: number = 0
  constructor(k: number) {
    this.k = k
  }

  enQueue(value: number): boolean {
    if (!this.isFull()) {
      this.value[this.tail % this.k] = value
      this.tail++
      return true
    }
    return false
  }

  deQueue(): boolean {
    if (!this.isEmpty()) {
      this.head++
      return true
    }
    return false
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.value[this.head % this.k]
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.value[(this.tail - 1) % this.k]
  }

  isEmpty(): boolean {
    return this.head === this.tail
  }

  isFull(): boolean {
    return this.tail - this.head === this.k
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/