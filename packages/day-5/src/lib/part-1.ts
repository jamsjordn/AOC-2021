export function part1(input: string): number {

  const instructions = input.split('\n').map(instruction => {
    const [[x1, y1], [x2, y2]] = instruction.split('->').map(part => part.split(','));
    return {
      x1,
      y1,
      x2,
      y2,
    };
  });

  let grid: number[][] = [];

  instructions.forEach(instruction => {

    if (
      +instruction.x2 > +instruction.x1
      && +instruction.y2 === +instruction.y1
    ) {
      for (let x = +instruction.x1; x <= +instruction.x2; x++) {
        const y = +instruction.y1;

        grid = addToCoords(grid, x, y);
      }
    } else if (
      +instruction.x2 < +instruction.x1
      && +instruction.y2 === +instruction.y1
    ) {
      for (let x = +instruction.x2; x <= +instruction.x1; x++) {
        const y = +instruction.y1;

        grid = addToCoords(grid, x, y);
      }
    } else if (
      +instruction.y2 > +instruction.y1
      && +instruction.x2 === +instruction.x1

    ) {
      for (let y = +instruction.y1; y <= +instruction.y2; y++) {
        const x = +instruction.x1;

        grid = addToCoords(grid, x, y);
      }
    } else if (
      +instruction.y1 > +instruction.y2
      && +instruction.x2 === +instruction.x1

    ) {
      for (let y = +instruction.y2; y <= +instruction.y1; y++) {
        const x = +instruction.x1;

        grid = addToCoords(grid, x, y);
      }
    }
  });

  let spotsWithMoreThanOne = 0;

  grid.forEach(row => {
    row.forEach(cell => {
      if (cell > 1) {
        spotsWithMoreThanOne++;
      }
    });
  });

  return spotsWithMoreThanOne;
}

function addToCoords(grid: number[][], x: number, y: number): number[][] {
  grid[y] = grid[y] || [];

  grid[y][x] = grid[y][x] || 0;

  grid[y][x] += 1;

  return grid;
}
