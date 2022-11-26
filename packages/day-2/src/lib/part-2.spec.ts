import { part2 } from './part-2';
import { input2 } from './part-2.input';

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

    expect(part2(input)).toEqual(900);
  });

  it('run', () => {
    console.log(part2(input2));
  });
});
