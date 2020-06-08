export function twoSum(nums: number[], target: number): number[] {
  const lookup: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complement in lookup) {
      return [lookup[complement], i];
    }
    lookup[num] = i;
  }
  // edge case
  throw new Error('No available solution');
}

export default twoSum;
