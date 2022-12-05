export function part2(input: string): number {

  const sequence = input.split('\n\n')[0]
    .split('');

  const chunkCounts: Partial<Record<string, number>> = {};

  for (let index = 0; index < sequence.length - 1; index++) {
    const chunk = `${sequence[index]}${sequence[index + 1]}`;

    chunkCounts[chunk] = (chunkCounts[chunk] || 0) + 1;
  }

  const instructions = input.split('\n\n')[1]
    .split('\n')
    .map(row => {
      const [chunk, insert] = row.split(' -> ');

      return {
        chunk,
        insert,
      };
    }).reduce<Partial<Record<string, string>>>(
      (result, { chunk, insert }) => ({
        ...result,
        [chunk]: insert,
      }),
      {},
    );

  const steps = 40;

  for (let step = 0; step < steps; step++) {
    Object.entries(instructions).forEach(([chunk, insert]) => {
      const countOfChunk = chunkCounts[chunk];

      if (countOfChunk) {
        chunkCounts[`${chunk[0]}${insert}`] = (chunkCounts[`${chunk[0]}${insert}`] || 0) + countOfChunk;

        chunkCounts[`${insert}${chunk[1]}`] = (chunkCounts[`${insert}${chunk[1]}`] || 0) + countOfChunk;
      }

      delete chunkCounts[chunk];
    });
  }

  const orderedCounts = Object.values(chunkCounts)
    .sort((a, b) => (a || 0) - (b || 0))
    .filter((letter): letter is number => letter !== undefined);

  return orderedCounts[orderedCounts.length - 1] - orderedCounts[0];
}

