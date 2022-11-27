const POINTS = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
} as const;

export function part1(input: string): number {

  const rows = input.split('\n')
    .map(row => row
      .split(''),
    );

  let runningTotal = 0;

  rows.forEach(row => {
    const openingTags: string[] = [];

    let illegalChar: keyof typeof POINTS | undefined;

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
      runningTotal += POINTS[illegalChar];
    }
  });

  return runningTotal;
}
