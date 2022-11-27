export function part1(input: string): number {

  const crabLocations = input.split(',').map(crabLocation => +crabLocation);

  const minLocation = Math.min(...crabLocations);
  const maxLocation = Math.max(...crabLocations);

  let smallestFuelUse: number | undefined;

  for (let location = minLocation; location <= maxLocation; location++) {
    const fuelUse = crabLocations.reduce<number>(
      (result, crabLocation) => result + Math.abs(location - crabLocation),
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
