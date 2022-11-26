export function part2(input: string): number {

  let fishesAtAges = input.split(',').map(fish => +fish).reduce<Record<number, number>>(
    (result, fishAge) => {
      result[fishAge] = result[fishAge] || 0;

      result[fishAge] += 1;
      return result;
    },
    {},
  );

  for (let day = 1; day <= 256; day++) {

    const fishAgesTomorrow: typeof fishesAtAges = {};

    Object.entries(fishesAtAges).forEach(([fishAge, count]) => {
      const fishAgeTomorrow = +fishAge - 1;

      if (fishAgeTomorrow >= 0) {
        fishAgesTomorrow[fishAgeTomorrow] = (fishAgesTomorrow[fishAgeTomorrow] || 0) + count;
      } else {
        fishAgesTomorrow[6] = (fishAgesTomorrow[6] || 0) + count;

        fishAgesTomorrow[8] = (fishAgesTomorrow[8] || 0) + count;
      }
    });

    fishesAtAges = fishAgesTomorrow;
  }

  return Object.values(fishesAtAges).reduce<number>(
    (result, count) => {
      result += count;
      return result;
    },
    0,
  );

}

