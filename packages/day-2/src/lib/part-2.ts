export function part2(input: Readonly<`${Direction} ${number}`[]>): number {
  let depth = 0;
  let forwardness = 0;
  let aim = 0;

  input.forEach(inputLine => {
    const [direction, amount] = inputLine.split(' ');

    switch (direction) {
      case 'forward':
        forwardness += +amount;

        depth += (+amount * aim);
        return;
      case 'up':
        aim -= +amount;
        return;
      case 'down':
        aim += +amount;
        return;
    }

    throw new Error('unrecognised: ' + inputLine);
  });

  return forwardness * depth;
}

type Direction = 'forward' | 'down' | 'up';
