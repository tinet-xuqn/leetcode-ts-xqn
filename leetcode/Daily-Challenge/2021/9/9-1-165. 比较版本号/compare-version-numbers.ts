function compareVersion(version1: string, version2: string): number {
  const v1: string[] = version1.split('.');
  const v2: string[] = version2.split('.');
  for (let i = 0; i < v1.length || i < v2.length; i++) {
    let x: number = v1[i] ? parseInt(v1[i]) : 0;
    let y: number = v2[i] ? parseInt(v2[i]) : 0;
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }
  return 0
};
