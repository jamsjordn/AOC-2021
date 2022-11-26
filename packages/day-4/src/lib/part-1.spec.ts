import { part1 } from './part-1';
import { exampleInput1 } from './part-1.example-input';
import { input1 } from './part-1.input';

describe.skip('day4', () => {
  it('should work', () => {
    expect(part1(exampleInput1)).toEqual(4512);
  });

  it('run', () => {
    console.log(part1(input1));
  });
});
