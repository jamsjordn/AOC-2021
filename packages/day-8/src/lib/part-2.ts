import { xor } from 'lodash';

export function part2(input: string): number {
  const rows = input.split('\n')
    .map(row => row
      // eslint-disable-next-line no-useless-escape
      .split(' ')
      .filter(val => val && val !== '|')
      .map(val => val.split('').sort().join('')),
    );

  let digitsFound = 0;

  rows.forEach(row => {

    const valuesMapByLength = row.reduce<ValuesMapByLength>(
      (result, value) => {
        const valueLength = value.length as (2 | 3 | 4 | 5 | 6 | 7);

        return ({
          ...result,
          [value.length]: Array.from(new Set(result[valueLength]).add(value)),
        });
      },
      {
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
      },
    );

    const found1 = valuesMapByLength[2][0];
    const found4 = valuesMapByLength[4][0];
    const found7 = valuesMapByLength[3][0];
    const found8 = valuesMapByLength[7][0];

    const { middleBar, topLeftStick } = figureOutSomePart1({ found1, found4, valuesMapByLength });

    const found0 = valuesMapByLength[6].find(value => !value.includes(middleBar));
    const found9 = valuesMapByLength[6].find(value =>
      value.includes(middleBar)
      && found1.split('').every(val => value.includes(val)),
    );
    const found6 = xor([found0, found9], valuesMapByLength[6])[0];

    if (!(found0 && found9 && found6)) { throw new Error('err'); }

    const found5 = valuesMapByLength[5].find(value => value.includes(topLeftStick));
    const found3 = valuesMapByLength[5].find(value =>
      found1.split('').every(val => value.includes(val)),
    );

    const found2 = xor([found5, found3], valuesMapByLength[5])[0];

    if (!(found2 && found5 && found3)) { throw new Error('err'); }

    const key = {
      [found0]: 0,
      [found1]: 1,
      [found2]: 2,
      [found3]: 3,
      [found4]: 4,
      [found5]: 5,
      [found6]: 6,
      [found7]: 7,
      [found8]: 8,
      [found9]: 9,
    };

    const last4Values = row.slice(-4);

    const found = +last4Values
      .map(value => key[value])
      .join('');

    digitsFound += found;
  });

  return digitsFound;
}

function figureOutSomePart1({
  found1,
  found4,
  valuesMapByLength,
}: {
  found1: string;
  found4: string;
  valuesMapByLength: ValuesMapByLength;
}): {
  middleBar: string;
  topLeftStick: string;
} {
  const charsToFind = xor(found1.split(''), found4.split(''));

  let middleBar: string | undefined;
  let topLeftStick: string | undefined;

  charsToFind.forEach(charToFind => {
    if (valuesMapByLength[6].every(val => val.includes(charToFind))) {
      topLeftStick = charToFind;
    } else {
      middleBar = charToFind;
    }
  });

  if (!middleBar || !topLeftStick) {
    throw new Error('errr');
  }

  return {
    middleBar,
    topLeftStick,
  };
}

type ValuesMapByLength = Record<2 | 3 | 4 | 5 | 6 | 7, string[]>;
