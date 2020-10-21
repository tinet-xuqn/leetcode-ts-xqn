function isLongPressedName(name: string, typed: string): boolean {
  if (name[0] !== typed[0]) {
    return false;
  }
  let i = 1;
  let j = 1;
  while (i < name.length || j < typed.length) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else {
      if (typed[j] !== name[i - 1]) {
        return false;
      }
      j++;
    }
  }
  return true;
};