import { solution, solution2 } from './solution';

describe('solution', () => {
  it('basic', () => {
    expect(solution(5000)).toEqual('MMMMM');
    expect(solution(1000)).toEqual('M');
    expect(solution(4)).toEqual('IV');
    expect(solution(1)).toEqual('I');
    expect(solution(1990)).toEqual('MCMXC');
    expect(solution(2008)).toEqual('MMVIII');
    expect(solution(1444)).toEqual('MCDXLIV');
  });
  it('custom', () => {
    expect(solution(5000)).toEqual('MMMMM');
    expect(solution(1990)).toEqual('MCMXC');
    expect(solution(1666)).toEqual('MDCLXVI');
    expect(solution(2008)).toEqual('MMVIII');
  });
});

describe('solution2', () => {
  it('basic', () => {
    expect(solution2(5000)).toEqual('MMMMM');
    expect(solution2(1000)).toEqual('M');
    expect(solution2(4)).toEqual('IV');
    expect(solution2(1)).toEqual('I');
    expect(solution2(1990)).toEqual('MCMXC');
    expect(solution2(2008)).toEqual('MMVIII');
    expect(solution2(1444)).toEqual('MCDXLIV');
  });
  it('custom', () => {
    expect(solution2(5000)).toEqual('MMMMM');
    expect(solution2(1990)).toEqual('MCMXC');
    expect(solution2(1666)).toEqual('MDCLXVI');
    expect(solution2(2008)).toEqual('MMVIII');
  });
});
