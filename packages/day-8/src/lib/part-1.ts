export function part1(input: string): number {

  const rows = input.split('\n')
    .map(row => row
      .split('|')[1]
      .split(' ')
      .filter(val => val),
    );

  let digitsFound = 0;

  rows.forEach(row => {
    row.forEach(value => {
      switch (value.length) {
        case 2: /* 1 */
        case 4: /* 4 */
        case 3: /* 7 */
        case 7: /* 8 */
          digitsFound++;
          break;
      }
    });
  });

  return digitsFound;
}
