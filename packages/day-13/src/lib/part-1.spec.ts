import { part1 } from './part-1';
import { exampleInput1 } from './part-1.example-1-input';
import { input1 } from './part-1.input';

describe('day13', () => {

  it('should work 1', () => {
    expect(part1(exampleInput1)).toEqual(17);
  });

  it('run', () => {
    console.log(part1(input1));
  });
});
