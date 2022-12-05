export function part1(
  input: string,
  steps: number,
): {
  result: number;
  smallestNumber: number;
  largestNumber: number;
} {

  const chunksCount = sequenceToChunkCount(input.split('\n\n')[0]);

  console.log({ chunksCount });

  const sequence = input.split('\n\n')[0]
    .split('');

  let firstChunk = `${sequence[0]}${sequence[1]}`;
  let lastChunk = `${sequence[sequence.length - 2]}${sequence[sequence.length - 1]}`;

  const instructions = input.split('\n\n')[1]
    .split('\n')
    .map(row => {

      const [chunk, insert] = row.split(' -> ');

      return {
        chunk,
        insert,
      };
    });

  for (let step = 0; step < steps; step++) {
    const nextCountOfChunks = { ...chunksCount };

    instructions.forEach(({ chunk, insert }) => {
      Object.entries(chunksCount).forEach(([currentChunk, count]) => {

        if (chunk === currentChunk) {

          const isFirstChunk = firstChunk === chunk;

          delete chunksCount[currentChunk];

          const beforeChunk = `${currentChunk[0]}${insert}`;

          chunksCount[beforeChunk] = (chunksCount[beforeChunk] || 0) + count + (isFirstChunk ? -1 : 0);

          if (isFirstChunk) { firstChunk = beforeChunk;}

          const isLastChunk = lastChunk === chunk;

          const afterChunk = `${insert}${currentChunk[1]}`;

          chunksCount[afterChunk] = (chunksCount[afterChunk] || 0) + count + (isLastChunk ? -1 : 0);

          if (isLastChunk) { lastChunk = afterChunk;}

        }
      });
    });

    console.log({ chunksCount });

  }

  const counts = Object.entries(
    Object.entries(chunksCount)
      .reduce<Record<string, number>>(
        (result, [chunk, count]) => ({
          ...result,
          [chunk[0]]: +(result[chunk[0]] || 0) + count,
          [chunk[1]]: +(result[chunk[1]] || 0) + count,
        }),
        {},
      ),
  ).reduce<number[]>(
    (result, [letter, count]) => {

      console.log({
        letter,
        count,
      });

      count = count / 2;

      return [...result, count];
    },
    [],
  ).sort((a, b) => a - b);

  const result = counts[counts.length - 1] - counts[0];
  return { result, smallestNumber: counts[0], largestNumber: counts[1] };

}

function sequenceToChunkCount(sequence: string): Record<string, number> {

  const chunksCount: Record<string, number> = {};

  sequence.split('').forEach((char, index) => {
    if (index === 0) { return; }

    const charBefore = sequence[index - 1];

    const chunk = `${charBefore}${char}`;

    chunksCount[chunk] = (chunksCount[chunk] || 0) + 1;
  });

  return chunksCount;

}
