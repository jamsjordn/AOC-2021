export function part1(input: string): number {

  const dots = input.split('\n\n')[0]
    .split('\n')
    .map(row => row
      .split(',')
      .map(val => +val),
    ).reduce<Partial<Record<number, Partial<Record<number, 'X'>>>>>(
      (result, [x, y]) => ({
        ...result,
        [x]: {
          ...(result[x] || {}),
          [y]: 'X',
        },
      }),
      {},
    );

  const instructions = input.split('\n\n')[1]
    .split('\n')
    .map(row => {

      const [axisBit, index] = row.split('=');

      return {
        axis: axisBit[axisBit.length - 1],
        index,
      };
    });

  instructions.forEach((instruction, instructionIndex) => {
    if (instructionIndex !== 0) { return; }

    if (instruction.axis === 'x') {
      Object.entries(dots).forEach(([xIndex, columns]) => {
        if ((+xIndex > +instruction.index) && columns) {
          Object.entries(columns).forEach(([yIndex, value]) => {
            if (value) {
              const xFoldedOn = +instruction.index - (+xIndex - +instruction.index);

              dots[xFoldedOn] = dots[xFoldedOn] || {};

              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              dots[xFoldedOn]![+yIndex] = dots[xFoldedOn]?.[+yIndex] || value;

              delete dots[+xIndex]?.[+yIndex];
            }
          });
        }
      });
    } else if (instruction.axis === 'y') {
      Object.entries(dots).forEach(([xIndex, columns]) => {
        if (columns) {
          Object.entries(columns).forEach(([yIndex, value]) => {
            if ((+yIndex > +instruction.index) && value) {
              const yFoldedOn = +instruction.index - (+yIndex - +instruction.index);

              dots[+xIndex] = dots[+xIndex] || {};

              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              dots[+xIndex]![yFoldedOn] = dots[+xIndex]?.[+yFoldedOn] || value;

              delete dots[+xIndex]?.[+yIndex];
            }
          });
        }
      });
    }
  });

  return (
    Object.values(dots)
      .filter((row): row is Partial<Record<number, 'X' | undefined>> => Boolean(row))
      .map(row => Object.values(row))
  ).flat(10)
    .filter((val): val is 'X' => val === 'X')
    .length;
}

