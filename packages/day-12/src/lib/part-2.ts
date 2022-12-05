const SPLITTER = '_';

export function part2(input: string): number {

  const connections = input.split('\n')
    .map(row => row
      .split('-'),
    ).reduce<Record<string, Set<string>>>(
      (result, caves) => {
        const cave0Connections = result[caves[0]] || new Set<string>();

        cave0Connections.add(caves[1]);

        const cave1Connections = result[caves[1]] || new Set<string>();

        cave1Connections.add(caves[0]);

        return {
          ...result,
          [caves[0]]: cave0Connections,
          [caves[1]]: cave1Connections,
        };
      },
      {},
    );

  const pathsTaken = new Set(['start']);

  let iterationStillHappening = false;

  do {
    iterationStillHappening = false;

    pathsTaken.forEach(pathTaken => {
      const cavesVisited = pathTaken.split(SPLITTER);
      const cavesVisitedSet = new Set(cavesVisited);
      const currentCave = cavesVisited[cavesVisited.length - 1];

      const smallCavesVisited = cavesVisited.filter(cave => cave === cave.toLowerCase());
      const smallCavesVisitedSet = new Set(smallCavesVisited);

      Object.values(Array.from(connections[currentCave])).forEach(connectedCave => {
        const nextPath = `${pathTaken}${SPLITTER}${connectedCave}`;

        const canRevisitSmall = smallCavesVisited.length === smallCavesVisitedSet.size;

        if (
          currentCave !== 'end'
          && (
            connectedCave === connectedCave.toUpperCase()
            || !cavesVisitedSet.has(connectedCave)
            || (canRevisitSmall && connectedCave !== 'start')
          )
          && !pathsTaken.has(nextPath)
        ) {

          pathsTaken.add(nextPath);

          iterationStillHappening = true;
        }
      });
    });
  } while (iterationStillHappening);

  const pathsDone = Array.from(pathsTaken).filter(path => path.split(SPLITTER).pop() === 'end');

  console.log({ pathsDone });

  return pathsDone.length;
}

