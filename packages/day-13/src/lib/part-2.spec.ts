import { exampleInput1 } from './part-1.example-1-input';
import { input1 } from './part-1.input';
import { part2 } from './part-2';

describe('day13', () => {

  it('should work 1', () => {
    expect(part2(exampleInput1)).toEqual(17);
  });

  it('run', () => {
    // 104 is wrong
    console.log(part2(input1));
  });
});
