import { reverse } from 'lodash';

const POINTS = {
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4,
} as const;

export function part2(input: string): number {

  const rows = input.split('\n')
    .map(row => row
      .split(''),
    );

  const runningTotals: number[] = [];

  rows.forEach(row => {
    const openingTags: (keyof typeof POINTS)[] = [];

    let illegalChar: string | undefined;

    row.forEach(value => {
      if (illegalChar) { return; }

      switch (value) {
        case '(':
        case '[':
        case '{':
        case '<':
          openingTags.push(value);
          break;
        case ')': {
          if (openingTags.pop() !== '(') { illegalChar = ')'; }

          break;
        }
        case ']': {
          if (openingTags.pop() !== '[') { illegalChar = ']'; }

          break;
        }
        case '}': {
          if (openingTags.pop() !== '{') { illegalChar = '}'; }

          break;
        }
        case '>': {
          if (openingTags.pop() !== '<') { illegalChar = '>'; }

          break;
        }

      }
    });

    if (illegalChar) {
      return;
    }

    runningTotals.push(reverse(openingTags).reduce<number>(
      (result, openingTag) => {

        const r = (result * 5) + POINTS[openingTag];

        return r;
      },
      0,
    ));

  });

  return runningTotals.sort((a, b) => a - b)[(runningTotals.length / 2) - 0.5];
}
