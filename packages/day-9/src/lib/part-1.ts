export function part1(input: string): number {

  const rows = input.split('\n')
    .map(row => row
      .split('')
      .map(val => +val),
    );

  let runningTotal = 0;

  rows.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      const above = (rows[rowIndex - 1]?.[columnIndex] ?? 10);
      const left = (rows[rowIndex]?.[columnIndex - 1] ?? 10);
      const right = (rows[rowIndex]?.[columnIndex + 1] ?? 10);
      const below = (rows[rowIndex + 1]?.[columnIndex] ?? 10);

      if (
        value < above
        && value < left
        && value < right
        && value < below
      ) {
        runningTotal = runningTotal + value + 1;
      }
    });
  });

  return runningTotal;
}
