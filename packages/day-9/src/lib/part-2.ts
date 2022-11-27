export function part2(input: string): number {

  const rows = input.split('\n')
    .map(row => row
      .split('')
      .map(val => +val),
    );

  const basinSizes: number[] = [];

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
        basinSizes.push(calculateBasin({
          locationsAlreadyIncluded: new Set<string>(),
          rows,
          columnIndex,
          rowIndex,
        }));
      }
    });
  });

  basinSizes.sort((a, b) => b - a);

  return basinSizes[0] * basinSizes[1] * basinSizes[2];
}

function calculateBasin(
  {
    locationsAlreadyIncluded,
    rows,
    columnIndex,
    rowIndex,
  }: {
    locationsAlreadyIncluded: Set<string>;
    rows: number[][];
    columnIndex: number;
    rowIndex: number;
  },
): number {
  const basinSize = 0;

  const coordString = getCoords({ columnIndex, rowIndex });

  if (
    locationsAlreadyIncluded.has(coordString)
  ) {
    return basinSize;
  }

  locationsAlreadyIncluded.add(coordString);

  if (rows[rowIndex]?.[columnIndex] === undefined || rows[rowIndex]?.[columnIndex] >= 9) {
    return basinSize;
  }

  return (
    1
    + calculateBasin({
      locationsAlreadyIncluded, rows, columnIndex: columnIndex - 1, rowIndex,
    })
    + calculateBasin({
      locationsAlreadyIncluded, rows, columnIndex, rowIndex: rowIndex - 1,
    })
    + calculateBasin({
      locationsAlreadyIncluded, rows, columnIndex: columnIndex + 1, rowIndex,
    })
    + calculateBasin({
      locationsAlreadyIncluded, rows, columnIndex, rowIndex: rowIndex + 1,
    })
  );

}

function getCoords({
  columnIndex,
  rowIndex,
}: {
  columnIndex: number;
  rowIndex: number;
}): string {
  return `${columnIndex}_${rowIndex}`;
}
