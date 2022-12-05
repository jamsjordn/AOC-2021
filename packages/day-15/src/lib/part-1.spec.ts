import { part1 } from './part-1';
import { exampleInput1 } from './part-1.example-1-input';
import { input1 } from './part-1.input';

describe('day15', () => {

  it('should work', () => {
    const result = part1(exampleInput1);

    console.log({ result });

    expect(result).toEqual(40);
  });

  it('should real', () => {
    const result = part1(input1, 40);

    console.log({ result });

    console.log(result.result);
  });
});
