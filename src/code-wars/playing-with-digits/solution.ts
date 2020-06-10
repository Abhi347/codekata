export function digPow(n: number, p: number): number {
  const digits = String(n).split('');
  let result = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = Number(digits[i]);
    const power = p + i;
    result += digit ** power;
  }

  if (result % n === 0) {
    return result / n;
  }

  return -1;
}

export default digPow;
