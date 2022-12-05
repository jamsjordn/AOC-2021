import { part1 } from './part-1';
import { exampleInput1 } from './part-1.example-1-input';
import { exampleInput2 } from './part-1.example-2-input';
import { exampleInput3 } from './part-1.example-3-input';
import { input1 } from './part-1.input';

describe('day12', () => {

  it('should work 1', () => {
    expect(part1(exampleInput1)).toEqual(10);
  });

  it('should work 2', () => {
    expect(part1(exampleInput2)).toEqual(19);
  });

  it('should work 3', () => {
    expect(part1(exampleInput3)).toEqual(226);
  });

  it('run', () => {
    console.log(part1(input1));
  });
});
