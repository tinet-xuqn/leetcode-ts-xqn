class NumArray {
  numsArr: number[] = [];
  sumsArr: number[] = [0];
  constructor(nums: number[]) {
    this.numsArr = nums;
    for (let i = 0; i < this.numsArr.length; i++) {
      this.sumsArr[i + 1] = this.sumsArr[i] + nums[i]
    }
  }


  sumRange(i: number, j: number): number {
    return this.sumsArr[j + 1] - this.sumsArr[i];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
