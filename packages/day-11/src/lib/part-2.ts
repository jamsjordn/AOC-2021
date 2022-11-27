export function part2(input: string): number {

  const rows = input.split('\n')
    .map(row => row
      .split('')
      .map(val => +val),
    );

  let runningTotal = 0;

  for (let i = 0; i < 1_000_000; i++) {

    const rowsLength = rows.length;

    for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
      const row = rows[rowIndex];

      const columnsLength = row.length;

      for (let columnIndex = 0; columnIndex < columnsLength; columnIndex++) {
        increaseOctopus({
          rows,
          columnIndex,
          rowIndex,
        });
      }
    }

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const row = rows[rowIndex];

      for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
        const value = row[columnIndex];

        if (value > 9) {
          runningTotal++;

          rows[rowIndex][columnIndex] = 0;
        }
      }
    }

    if (
      rows.every(row => row.every(cell => cell === 0))
    ) {
      return i + 1;
    }
  }

  return -1;
}

function increaseOctopus({
  rows,
  columnIndex,
  rowIndex,
}: {
  rows: number[][];
  columnIndex: number;
  rowIndex: number;
}): void {
  if (rows[rowIndex]?.[columnIndex] === undefined) { return; }

  rows[rowIndex][columnIndex] = rows[rowIndex][columnIndex] + 1;

  if (
    rows[rowIndex]?.[columnIndex] !== 10
  ) {
    return;
  }

  increaseOctopus({
    rows,
    columnIndex: columnIndex - 1,
    rowIndex: rowIndex - 1,
  });

  increaseOctopus({
    rows,
    columnIndex,
    rowIndex: rowIndex - 1,
  });

  increaseOctopus({
    rows,
    columnIndex: columnIndex + 1,
    rowIndex: rowIndex - 1,
  });

  increaseOctopus({
    rows,
    columnIndex: columnIndex - 1,
    rowIndex,
  });

  increaseOctopus({
    rows,
    columnIndex: columnIndex + 1,
    rowIndex,
  });

  increaseOctopus({
    rows,
    columnIndex: columnIndex - 1,
    rowIndex: rowIndex + 1,
  });

  increaseOctopus({
    rows,
    columnIndex,
    rowIndex: rowIndex + 1,
  });

  increaseOctopus({
    rows,
    columnIndex: columnIndex + 1,
    rowIndex: rowIndex + 1,
  });

}
