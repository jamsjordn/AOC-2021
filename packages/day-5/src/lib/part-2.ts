export function part2(input: string): number {

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

    let x = +instruction.x1;
    let y = +instruction.y1;

    grid = addToCoords(grid, x, y);

    do {

      if (+instruction.x1 === +instruction.x2) {
        // Do nothing
      } else if (+x < +instruction.x2) {
        x++;
      } else {
        x--;
      }

      if (+instruction.y1 === +instruction.y2) {
        // Do nothing
      } else if (+y < +instruction.y2) {
        y++;
      } else {
        y--;
      }

      grid = addToCoords(grid, x, y);

    } while (
      x !== +instruction.x2
      || y !== +instruction.y2
    );

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
