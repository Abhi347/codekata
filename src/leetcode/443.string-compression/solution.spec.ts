import { compress } from './solution';

describe('string compression solution', () => {
  it('basic', () => {
    const arr1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    expect(compress(arr1)).toEqual(6);
    expect(arr1).toEqual(['a', '2', 'b', '2', 'c', '3']);

    const arr2 = ['a'];
    expect(compress(arr2)).toEqual(1);
    expect(arr2).toEqual(['a']);

    const arr3 = [
      'a',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
    ];
    expect(compress(arr3)).toEqual(4);
    expect(arr3).toEqual(['a', 'b', '1', '2']);
  });
  it('custom', () => {
    const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    expect(compress(arr1)).toEqual(arr1.length);
    expect(arr1).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
});
