function removeSubfolders(folder: string[]): string[] {
  folder.sort()
  const res: string[] = [folder[0]]
  let l: number = 0
  let r: number = 1
  while (r < folder.length) {
    if (folder[r].startsWith(folder[l] + '/')) {
      r++
      continue
    }
    l = r
    r++
    res.push(folder[l])
  }
  return res
};
