class Trie {
  children: any = {};
  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children;
    for (const s of word) {
      if (!node[s]) {
        node[s] = {};
      }
      node = node[s];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.children;
    for (const s of word) {
      if (!node[s]) {
        return false;
      }
      node = node[s];
    }
    if (!node.isEnd) {
      return false;
    }
    return true;
  }

  startsWith(prefix: string): boolean {
    let node = this.children;
    for (const s of prefix) {
      if (!node[s]) {
        return false;
      }
      node = node[s];
    }
    return true;
  }
}
