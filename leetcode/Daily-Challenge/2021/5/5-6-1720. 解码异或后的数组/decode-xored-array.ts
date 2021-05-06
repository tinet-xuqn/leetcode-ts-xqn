// 自反：a ⊕ b ⊕ a = b
function decode(encoded: number[], first: number): number[] {
  const arr: number[] = [first];
  for (let i = 0; i < encoded.length; i++) {
    arr[i + 1] = encoded[i] ^ arr[i];
  }
  return arr;
};
