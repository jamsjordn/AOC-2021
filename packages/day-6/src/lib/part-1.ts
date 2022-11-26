export function part1(input: string): number {

  let fishes = input.split(',').map(fish => +fish);

  for (let day = 1; day <= 80; day++) {
    const fishesForNextDay = [...fishes];

    fishes.forEach((fish, index) => {
      if (fish === 0) {
        fishesForNextDay[index] = 6;

        fishesForNextDay.push(8);
      } else {
        fishesForNextDay[index] = fish - 1;
      }
    });

    fishes = fishesForNextDay;
  }

  return fishes.length;

}
