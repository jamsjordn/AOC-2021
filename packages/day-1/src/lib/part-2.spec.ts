import { part2 } from './part-2';
import { input2 } from './part-2.input';

describe('part2', () => {
  it('test', () => {
    const input = [
      607,
      618,
      618,
      617,
      647,
      716,
      769,
      792,
    ];

    console.log(part2(input));
  });

  it('run', () => {
    const input = input2;

    console.log(part2(input));
  });
});
