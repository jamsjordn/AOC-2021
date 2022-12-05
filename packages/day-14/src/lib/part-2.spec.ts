import { exampleInput1 } from './part-1.example-1-input';
import { input1 } from './part-1.input';
import { part2 } from './part-2';

describe('day14', () => {
  it('should work 1', () => {
    expect(part2(exampleInput1)).toEqual(2188189693529);
  });

  it('run', () => {
    console.log(part2(input1));
  });
});
