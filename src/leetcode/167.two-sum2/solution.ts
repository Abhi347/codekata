export function twoSum(numbers: number[], target: number): number[] {
  let lhs = 0;
  let rhs = numbers.length - 1;
  while (lhs < rhs) {
    const sum = numbers[lhs] + numbers[rhs];
    if (sum === target) {
      return [lhs + 1, rhs + 1];
    }
    if (sum > target) {
      rhs--;
    } else {
      lhs++;
    }
  }
  throw new Error('No available solution');
}

export default twoSum;
