import { digPow } from './solution';

describe('playing with digits solution', () => {
  it('basic', () => {
    expect(digPow(89, 1)).toStrictEqual(1);
    expect(digPow(92, 1)).toStrictEqual(-1);
    expect(digPow(114, 3)).toStrictEqual(9);
    expect(digPow(695, 2)).toStrictEqual(2);
    expect(digPow(46288, 3)).toStrictEqual(51);
  });
});
