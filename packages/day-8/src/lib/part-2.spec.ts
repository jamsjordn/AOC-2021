import { exampleInput1 } from './part-1.example-input';
import { input1 } from './part-1.input';
import { part2 } from './part-2';

describe('day7', () => {

  it('should work', () => {
    expect(part2(exampleInput1)).toEqual(61229);
  });

  it('run', () => {
    console.log(part2(input1));
  });
});
