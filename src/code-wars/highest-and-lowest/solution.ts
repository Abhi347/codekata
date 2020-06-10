export function highAndLow(numbers: string): string {
  const nums = numbers.split(' ');
  let highest = Number(nums[0]);
  let lowest = Number(nums[0]);
  nums.forEach((num) => {
    const numVal = Number(num);
    if (numVal > highest) {
      highest = numVal;
    }
    if (numVal < lowest) {
      lowest = numVal;
    }
  });
  return `${highest} ${lowest}`;
}

export default highAndLow;
