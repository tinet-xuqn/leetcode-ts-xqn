#### [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)

思路：原地反转，左右两个指针移动，变量交换就行

```typescript
function reverseString(s: string[]): void {
  let i = 0, j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};
```

