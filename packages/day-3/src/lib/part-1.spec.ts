import { part1 } from './part-1';
import { input1 } from './part-1.input';

describe.skip('day3', () => {
  it('should work', () => {
    const input = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ] as const;

    expect(part1(input)).toEqual(198);
  });

  it('run', () => {
    console.log(part1(input1));
  });
});
