const MARKED_OFF_VALUE = 'X';

export function part1(input: string): number {
  const [numbersString, ...boardStrings] = input.split('\n\n');
  const numbersCalled = numbersString.split(',');

  let boards = boardStrings.map(boardAsString =>
    boardAsString
      .split('\n')
      .map(row =>
        row.split(' ')
          .filter(cell => cell !== ''),
      ),
  );

  let winnerValue = 0;

  for (const numberCalled of numbersCalled) {
    if (winnerValue) { return winnerValue; }

    boards = boards.map(board => {
      const markedBoard = markNumberOffBoard(board, numberCalled);

      if (boardHasWon(markedBoard)) {

        winnerValue = sumOfNumbersLeft(markedBoard) * +numberCalled;
      }

      return markedBoard;
    });
  }

  return winnerValue;

}

function markNumberOffBoard(board: string[][], numberCalled: string): string[][] {
  return board.map(row => row.map(cell => cell === numberCalled
    ? MARKED_OFF_VALUE
    : cell));
}

function boardHasWon(board: string[][]): boolean {
  let winFound = false;

  const columns: boolean[] = [];

  board.forEach(row => {
    winFound = winFound || row.every(cell => cell === MARKED_OFF_VALUE);

    if (winFound) {
      return;
    }

    row.forEach((cell, columnIndex) => {
      columns[columnIndex] = columns[columnIndex] !== undefined ? columns[columnIndex] : true;

      if (cell !== MARKED_OFF_VALUE) {
        columns[columnIndex] = false;
      }
    });
  });

  return Boolean(winFound || columns.some(column => column));
}

function sumOfNumbersLeft(board: string[][]): number {

  return board.reduce<number>(
    (result, row) => {
      result += row.reduce<number>(
        (innerResult, cell) => {
          if (cell !== MARKED_OFF_VALUE) {
            innerResult += +cell;
          }

          return innerResult;
        },
        0,
      );
      return result;
    },
    0,
  );
}
