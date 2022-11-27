export function part2(input: string): number {
  const crabLocations = input.split(',').map(crabLocation => +crabLocation);

  const minLocation = Math.min(...crabLocations);
  const maxLocation = Math.max(...crabLocations);

  let smallestFuelUse: number | undefined;

  for (let location = minLocation; location <= maxLocation; location++) {
    const fuelUse = crabLocations.reduce<number>(
      (result, crabLocation) => {
        const distance = Math.abs(location - crabLocation);
        let fuelUseForCrab = 0;

        for (let i = 1; i <= distance; i++) {
          fuelUseForCrab += i;
        }

        return result + fuelUseForCrab;
      },
      0,
    );

    if (
      smallestFuelUse === undefined
      || fuelUse < smallestFuelUse
    ) {
      smallestFuelUse = fuelUse;
    }
  }

  if (smallestFuelUse === undefined) {
    throw new Error('bad');
  }

  return smallestFuelUse;
}

