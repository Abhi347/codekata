import { duplicateEncode } from './solution';

describe('duplicateEncode solution', () => {
  it('basic', () => {
    expect(duplicateEncode('din')).toStrictEqual('(((');
    expect(duplicateEncode('recede')).toStrictEqual('()()()');
    expect(duplicateEncode('Success')).toStrictEqual(')())())');
    expect(duplicateEncode('(( @')).toStrictEqual('))((');
  });
});
