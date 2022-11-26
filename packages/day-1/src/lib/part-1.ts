export function part1(input: number[]): number {
  return input.reduce<number>(
    (result, inputLine, index) => {
      if (index !== 0 && inputLine > input[index - 1]) {
        return result + 1;
      }

      return result;
    },
    0,
  );
}
