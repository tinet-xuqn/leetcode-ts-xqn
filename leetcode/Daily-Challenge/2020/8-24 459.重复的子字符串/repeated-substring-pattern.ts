function repeatedSubstringPattern(s: string): boolean {
  const len = s.length;
  for (let i = 1; i * 2 <= len; i++) {
    let match = true;
    if (len % i === 0) {
      for (let j = i; j < len; j++) {
        if (s[j] !== s[j - i]) {
          match = false;
          break;
        }
      }
      if (match) {
        return true;
      }
    }
  }
  return false;
};