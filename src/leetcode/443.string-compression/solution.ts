/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
export function compress(chars: string[]): number {
  if (chars.length <= 1) {
    return chars.length;
  }
  let tempCount = 0;
  let tempCh = '';
  let nextWriteIndex = 0;
  const writeFunc = () => {
    chars[nextWriteIndex] = tempCh;
    nextWriteIndex++;
    if (tempCount > 1) {
      const countStr = String(tempCount);
      const countArr = countStr.split('');
      countArr.forEach((countDigit) => {
        chars[nextWriteIndex] = countDigit;
        nextWriteIndex++;
      });
    }
  };
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (tempCh.length === 0) {
      tempCh = ch;
      tempCount = 1;
    } else if (tempCh !== ch) {
      writeFunc();
      tempCh = ch;
      tempCount = 1;
      if (i === chars.length - 1) {
        writeFunc();
      }
    } else if (i === chars.length - 1) {
      tempCount++;
      writeFunc();
      tempCh = ch;
      tempCount = 1;
    } else {
      tempCount++;
    }
  }
  chars.length = nextWriteIndex;
  return chars.length;
}

export default compress;
