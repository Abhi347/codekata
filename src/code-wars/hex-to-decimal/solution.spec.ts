import { hexToDec } from './solution';

describe('roman-numerals-encoder solution', () => {
  it('basic', () => {
    expect(hexToDec('1')).toEqual(1);
    expect(hexToDec('a')).toEqual(10);
    expect(hexToDec('10')).toEqual(16);
    expect(hexToDec('FF')).toEqual(255);
    expect(hexToDec('-C')).toEqual(-12);
  });
});
