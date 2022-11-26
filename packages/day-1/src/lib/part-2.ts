import { part1 } from './part-1';

export function part2(input: number[]): number {
  const newInput: number[] = [];

  input.forEach((inputLine, index) => {
    const a = +input[index];
    const b = +input[index + 1];
    const c = +input[index + 2];

    if (
      !isNaN(a)
      && !isNaN(b)
      && !isNaN(c)
    ) {
      newInput.push(a + b + c);
    }
  });

  return part1(newInput);
}
