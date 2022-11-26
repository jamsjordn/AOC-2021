export function part2(input: Readonly<string[]>): number {
  const indexes = input[0].length;

  let oxygenInputsRemaining = input;
  let co2InputsRemaining = input;

  for (let index = 0; index < indexes; index++) {
    const oxygenLeatCommon = mostCommonAtIndex(
      oxygenInputsRemaining,
      index,
      'oxygen',
    );

    oxygenInputsRemaining = oxygenInputsRemaining.length > 1
      ? oxygenInputsRemaining.filter(inputLine => inputLine[index] === oxygenLeatCommon)
      : oxygenInputsRemaining;

  }

  for (let index = 0; index < indexes; index++) {

    const co2MostCommon = mostCommonAtIndex(
      co2InputsRemaining,
      index,
      'co2',
    );

    co2InputsRemaining = co2InputsRemaining.length > 1
      ? co2InputsRemaining.filter(inputLine => inputLine[index] === co2MostCommon)
      : co2InputsRemaining;

  }

  return parseInt(oxygenInputsRemaining[0], 2) * parseInt(co2InputsRemaining[0], 2);
}

function mostCommonAtIndex(
  input: Readonly<string[]>,
  index: number,
  type: 'oxygen' | 'co2',
): string {
  const founds: Record<string, number> = {};

  input.forEach(inputLine => {
    founds[inputLine[index]] = founds[inputLine[index]] || 0;

    founds[inputLine[index]] += 1;
  });

  switch (type) {
    case 'oxygen': {
      return founds[1] >= founds[0] ? '1' : '0';
    }
    case 'co2': {
      return founds[0] <= founds[1] ? '0' : '1';
    }
  }
}
