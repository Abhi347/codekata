import { highAndLow } from './solution';

describe('highest and lowest solution', () => {
  it('basic', () => {
    expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toStrictEqual(
      '542 -214'
    );
    expect(highAndLow('1 2 3 4 5')).toStrictEqual('5 1');
    expect(highAndLow('1 2 -3 4 5')).toStrictEqual('5 -3');
    expect(highAndLow('1 9 3 4 -5')).toStrictEqual('9 -5');
  });
  it('custom', () => {
    expect(highAndLow('-4 -5 -29 -54 -4 -214 5e-324 -1')).toStrictEqual(
      '5e-324 -214'
    );
    expect(
      highAndLow('-4 -5 -29 -54 -4 -214 5e-324 -4572 -64 -1 -3 -6 -6')
    ).toStrictEqual('5e-324 -4572');
  });
});
