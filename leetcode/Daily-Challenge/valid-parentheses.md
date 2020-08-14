### valid-parentheses

思路：新建一个栈，遍历输入字符串，
遇到左括号放进栈，遇到右括号和栈的第一个左括号比较，
对应的消除，不对应就不合格。


#### 初始版
```
function isValid(s: string): boolean {
    const obj: any = {
        '(': ')',
        '{': '}',
        '[': ']'
    },
    result: string[] = [],
    sArr: string[] = s.split(''),
    len = sArr.length;
    for (let i = 0; i < len; i++) {
        const lastItem: string = result[result.length - 1];
        if (obj[lastItem] === sArr[i]) {
            result.pop()
        } else {
            result.push(sArr[i]);
        }
    }
    return result.length === 0;
}
```

#### 优化版
```
function isValid2(s: string): boolean {
    const obj: any = {
        '(': ')',
        '{': '}',
        '[': ']'
    },
    result: string[] = [],
    sArr: string[] = s.split(''),
    len = sArr.length;
    if (len % 2) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (obj[sArr[i]]) {
            result.push(sArr[i]);
            continue;
        }
        if (sArr[i] !== obj[<string>result.pop()]) {
            return false;
        }
    }
    return result.length === 0;
}
```