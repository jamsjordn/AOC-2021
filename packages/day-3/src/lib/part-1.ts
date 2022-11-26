export function part1(input: Readonly<string[]>): number {

  const results = input.reduce<{ '0': number; '1': number }[]>(
    (result, inputLine) => {
      const values = inputLine.split('');

      values.forEach((value, valueIndex) => {
        result[valueIndex] = result[valueIndex] || { 0: 0, 1: 0 };

        result[valueIndex][value as unknown as 0 | 1]++;
      });
      return result;
    },
    [],
  );

  let most0 = '';
  let most1 = '';

  results.forEach(result => {
    if (result[0] > result[1]) {
      most0 = `${most0}1`;

      most1 = `${most1}0`;
    } else {
      most0 = `${most0}0`;

      most1 = `${most1}1`;
    }
  });

  return parseInt(most0, 2) * parseInt(most1, 2);
}

