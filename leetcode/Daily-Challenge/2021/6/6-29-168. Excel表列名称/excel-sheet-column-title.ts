function convertToTitle(columnNumber: number): string {
  let res: string = '';
  while (columnNumber) {
    let cur: number = columnNumber % 26;
    cur = cur ? cur : 26;
    res = String.fromCharCode(cur + 64) + res;
    columnNumber = Math.floor(columnNumber / 26);
    if (cur === 26) {
      columnNumber -= 1;
    }
  }
  return res;
};