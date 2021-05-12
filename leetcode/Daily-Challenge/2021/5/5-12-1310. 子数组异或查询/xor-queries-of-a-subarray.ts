function xorQueries(arr: number[], queries: number[][]): number[] {
  let res: number[] = [0];
  for (let i = 0; i < arr.length; i++) {
    res[i + 1] = res[i] ^ arr[i];
  }
  let queriesArr: number[] = [];
  for (let i = 0; i < queries.length; i++) {
    queriesArr[i] = res[queries[i][0]] ^ res[queries[i][1] + 1];
  }
  return queriesArr;
};
