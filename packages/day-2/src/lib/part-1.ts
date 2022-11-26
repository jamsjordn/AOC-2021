export function part1(input: Readonly<`${Direction} ${number}`[]>): number {
  let depth = 0;
  let forwardness = 0;

  input.forEach(inputLine => {
    const [direction, amount] = inputLine.split(' ');

    switch (direction) {
      case 'forward':
        forwardness += +amount;
        return;
      case 'up':
        depth -= +amount;
        return;
      case 'down':
        depth += +amount;
        return;
    }

    throw new Error('unrecognised: ' + inputLine);
  });

  return forwardness * depth;
}

type Direction = 'forward' | 'down' | 'up';
