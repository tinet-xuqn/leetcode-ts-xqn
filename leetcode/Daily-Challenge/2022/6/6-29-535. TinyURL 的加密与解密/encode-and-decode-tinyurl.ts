/**
 * Encodes a URL to a shortened URL.
 */


function encode(longUrl: string): string {
  this.dataBase = new Map()
  this.id = 0
  this.id++
  this.dataBase.set(this.id.toString(), longUrl)
  return 'http://tinyurl.com/' + this.id
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	const id = shortUrl.slice(19)
  return this.dataBase.get(id)
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */