export function hexToDec(hexString: string): number {
  const tempHex = hexString.toLowerCase();
  const hexToNumMap: { [key: string]: number } = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let result = 0;
  let power = 0;
  for (let i = tempHex.length - 1; i >= 0; i--, power++) {
    const ch = tempHex[i];
    if (i === 0 && ch === '-') {
      result *= -1;
    } else if (ch in hexToNumMap) {
      result += hexToNumMap[ch] * 16 ** power;
    } else {
      result += Number(ch) * 16 ** power;
    }
  }
  return result;
}

export default hexToDec;
