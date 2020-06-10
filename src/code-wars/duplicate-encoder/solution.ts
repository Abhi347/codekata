export function duplicateEncode(word: string): string {
  const tempWord = word.toLowerCase();
  const lookup = new Map<string, number>();

  for (const ch of tempWord) {
    lookup.set(ch, (lookup.get(ch) || 0) + 1);
  }
  let result = '';
  for (const ch of tempWord) {
    result += lookup.get(ch) === 1 ? '(' : ')';
  }
  return result;
}

export default duplicateEncode;
