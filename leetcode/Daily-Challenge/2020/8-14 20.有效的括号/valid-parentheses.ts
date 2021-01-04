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