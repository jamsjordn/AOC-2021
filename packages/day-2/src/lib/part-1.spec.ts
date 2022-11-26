import { part1 } from './part-1';
import { input1 } from './part-1.input';

describe('day2', () => {
  it('should work', () => {
    const input = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2',
    ] as const;

    expect(part1(input)).toEqual(150);
  });

  it('run', () => {
    console.log(part1(input1));
  });
});
