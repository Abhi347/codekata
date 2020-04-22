export function solution(number: number): string {
  // convert the number to a roman numeral
  function getDigitString(
    curNum: number,
    place: number,
    unitDigit: string,
    fiveUnitDigit?: string,
    nineUnitDigit?: string
  ): [string, number] {
    if (curNum < place) {
      return ['', curNum];
    }
    const resultNum = curNum % place;
    let resultStr = '';

    const placeCount = Math.floor(curNum / place);

    if (
      placeCount <= 3 ||
      fiveUnitDigit === undefined ||
      nineUnitDigit === undefined
    ) {
      for (let i = 0; i < placeCount; i++) {
        resultStr += unitDigit;
      }
    } else if (placeCount === 4) {
      resultStr = `${unitDigit}${fiveUnitDigit}`;
    } else if (placeCount === 5) {
      resultStr = fiveUnitDigit;
    } else if (placeCount < 9) {
      resultStr = fiveUnitDigit;
      for (let i = 0; i < placeCount - 5; i++) {
        resultStr += unitDigit;
      }
    } else if (placeCount === 9) {
      resultStr = nineUnitDigit;
    } else {
      throw new Error(`Invalid Argument ${placeCount}`);
    }

    return [resultStr, resultNum];
  }
  let result = '';
  let curNum = number;
  if (curNum >= 1000) {
    let digitStr: string;
    [digitStr, curNum] = getDigitString(curNum, 1000, 'M');
    result += digitStr;
  }
  if (curNum >= 100) {
    let digitStr: string;
    [digitStr, curNum] = getDigitString(curNum, 100, 'C', 'D', 'CM');
    result += digitStr;
  }
  if (curNum >= 10) {
    let digitStr: string;
    [digitStr, curNum] = getDigitString(curNum, 10, 'X', 'L', 'XC');
    result += digitStr;
  }
  if (curNum >= 1) {
    let digitStr: string;
    [digitStr, curNum] = getDigitString(curNum, 1, 'I', 'V', 'IX');
    result += digitStr;
  }
  return result;
}

export function solution2(number: number): string {
  // convert the number to a roman numeral
  const ROMAN_DIGITS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  let curNum = number;
  const digits = Object.keys(ROMAN_DIGITS) as Array<keyof typeof ROMAN_DIGITS>;
  digits.forEach((digit) => {
    result += digit.repeat(Math.floor(curNum / ROMAN_DIGITS[digit]));
    curNum %= ROMAN_DIGITS[digit];
  });
  return result;
}
