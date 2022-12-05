import { part1 } from './part-1';
import { exampleInput1 } from './part-1.example-1-input';
import { input1 } from './part-1.input';

describe('day14', () => {

  it('0 step', () => {
    const result = part1(exampleInput1, 0);

    console.log({ result });

    expect(result.result).toEqual(1);

    expect(result.smallestNumber).toEqual(1);

    expect(result.largestNumber).toEqual(2);
  });

  it('1 step', () => {
    const result = part1(exampleInput1, 1);

    console.log({ result });

    expect(result.result).toEqual(1);

    expect(result.smallestNumber).toEqual(1);

    expect(result.largestNumber).toEqual(2);
  });

  it('2 step', () => {
    const result = part1(exampleInput1, 2);

    console.log({ result });

    expect(result.result).toEqual(5);

    expect(result.smallestNumber).toEqual(1);

    expect(result.largestNumber).toEqual(6);
  });

  it('3 step', () => {
    const result = part1(exampleInput1, 3);

    console.log({ result });

    expect(result.result).toEqual(7);

    expect(result.smallestNumber).toEqual(4);

    expect(result.largestNumber).toEqual(11);
  });

  it('4 step', () => {
    const result = part1(exampleInput1, 4);

    console.log({ result });

    expect(result.result).toEqual(18);

    expect(result.smallestNumber).toEqual(5);

    expect(result.largestNumber).toEqual(23);
  });

  it('10 step example', () => {
    const result = part1(exampleInput1, 10);

    console.log({ result });

    expect(result.result).toEqual(1588);

    expect(result.smallestNumber).toEqual(161);

    expect(result.largestNumber).toEqual(1749);
  });

  it('10 step real', () => {
    const result = part1(input1, 10);

    console.log({ result });

    expect(result.result).toEqual(2170);
  });

  it('40 step example', () => {
    const result = part1(exampleInput1, 40);

    console.log({ result });

    expect(result.result).toEqual(2188189693529);

    expect(result.smallestNumber).toEqual(3849876073);

    expect(result.largestNumber).toEqual(2192039569602);
  });

  it('40 step real', () => {
    const result = part1(input1, 40);

    console.log({ result });

    console.log(result.result);
  });
});
