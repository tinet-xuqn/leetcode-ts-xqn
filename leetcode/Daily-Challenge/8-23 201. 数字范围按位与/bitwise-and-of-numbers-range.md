### 数字范围按位与



#### 思路：[官方题解](https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/solution/shu-zi-fan-wei-an-wei-yu-by-leetcode-solution/)

最终我们可以将问题重新表述为：给定两个整数，我们要找到它们对应的二进制字符串的公共前缀。



#### 方法一：向右位移，移到m===n

```typescript
function rangeBitwiseAnd(m: number, n: number): number {
  let shift = 0;
  while (m < n) {
    m = m >> 1;
    n = n >> 1;
    shift++;
  }
  return m << shift;
};
```



#### 方法二：Brian Kernighan 算法



将大的数从右归0到小于等于小的数

```typescript
function rangeBitwiseAnd2(m: number, n: number): number {
  while (m < n) {
    n = n & (n - 1);
  }
  return n;
};
```

