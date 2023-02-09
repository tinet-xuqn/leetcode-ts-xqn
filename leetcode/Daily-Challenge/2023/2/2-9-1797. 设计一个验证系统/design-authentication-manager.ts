class AuthenticationManager {
    timeToLive: number = 0
    tokenIdMap: Map<string, number> = new Map()
    constructor(timeToLive: number) {
      this.timeToLive = timeToLive
    }
    generate(tokenId: string, currentTime: number): void {
      this.tokenIdMap.set(tokenId, currentTime + this.timeToLive);
    }

    renew(tokenId: string, currentTime: number): void {
      if (this.tokenIdMap.has(tokenId)) {
        if (currentTime < <number>this.tokenIdMap.get(tokenId)) {
          this.tokenIdMap.set(tokenId, currentTime + this.timeToLive);
        }
      }
    }

    countUnexpiredTokens(currentTime: number): number {
      let size: number = 0
      for (const value of this.tokenIdMap.values()) {
        if (value > currentTime) {
          size++
        }
      }
      return size
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
