export function part1(
  input: string,
  steps: number,
): {
  result: number;
  smallestNumber: number;
  largestNumber: number;
} {

  let sequence = input.split('\n\n')[0]
    .split('');

  const instructions =
    input.split('\n\n')[1]
      .split('\n')
      .map(row => {

        const [chunk, insert] = row.split(' -> ');

        return {
          chunk,
          insert,
        };
      })
      .reduce<Record<string, string>>(
        (result, { chunk, insert }) => ({
          ...result,
          [chunk]: insert,
        }),
        {},
      );

  console.log({ sequence });

  for (let step = 0; step < steps; step++) {
    console.log();
    const nextSequence: string[] = [];

    sequence.forEach((char, index) => {
      console.log({ char, index });
      const chunk = `${char}${sequence[index + 1]}`;
      const instruction = instructions[chunk];

      nextSequence.push(char);

      if (
        chunk.length === 2
        && instruction
      ) {
        console.log({
          chunk,
          instruction,
        });

        nextSequence.push(instruction);
      }

    });

    console.log({ nextSequence });

    sequence = nextSequence;
  }

  console.log({ sequence });

  const counts = Object.values(
    sequence.reduce<Record<string, number>>(
      (result, char) => ({
        ...result,
        [char]: (result[char] || 0) + 1,
      }),
      {},
    ),
  ).sort((a, b) => a - b);

  console.log({ counts });

  const result = counts[counts.length - 1] - counts[0];
  return { result, smallestNumber: counts[0], largestNumber: counts[counts.length - 1] };

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
