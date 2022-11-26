import { part2 } from './part-2';
import { input2 } from './part-2.input';

describe('day3', () => {
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

    expect(part2(input)).toEqual(230);
  });

  it('run', () => {
    console.log(part2(input2));
  });
});
