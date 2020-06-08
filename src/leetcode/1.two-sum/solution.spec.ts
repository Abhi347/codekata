import { twoSum } from './solution';

describe('two sum solution', () => {
  it('basic', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
  it('custom', () => {
    expect(twoSum([2, 7, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 7, 11, 15], 14)).toEqual([1, 2]);
    expect(()=>twoSum([2, 7, 7, 11, 15], 59)).toThrowError();
  });
});
