class MyCalendar {
  bookMap: number[][] = []
  constructor() {
    this.bookMap = []
  }
  book(start: number, end: number): boolean {
    const res: number[] = [start, end]
    if (!this.bookMap.length) {
      this.bookMap.push(res)
      return true
    }
    if (start >= this.bookMap[this.bookMap.length - 1][1]) {
      this.bookMap.push(res)
      return true
    }
    for (let i = 0; i < this.bookMap.length; i++) {
      if (end <= this.bookMap[i][0]) {
        if (i === 0 || (start >= this.bookMap[i - 1][1])) {
          this.bookMap.splice(i, 0, res)
          return true
        } else {
          return false
        }
      }
    }
    return false
  }
}

/**
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/
