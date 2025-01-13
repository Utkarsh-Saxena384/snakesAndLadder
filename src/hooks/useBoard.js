const useBoard = () => {
  const boardSize = 10;
  const ladders = { 4: 14, 9: 31, 21: 42, 28: 84, 51: 67, 72: 91, 80: 99 };
  const snakes = {
    17: 7,
    54: 34,
    62: 19,
    64: 60,
    87: 36,
    93: 73,
    95: 75,
    98: 79,
  };

  const generateBoard = () => {
    const board = [];
    let counter = boardSize * boardSize;

    for (let row = 0; row < boardSize; row++) {
      const currentRow = [];
      for (let col = 0; col < boardSize; col++) {
        currentRow.push(counter--);
      }
      if (row % 2 !== 0) currentRow.reverse();
      board.push(currentRow);
    }
    return board;
  };

  return { ladders, snakes, boardSize, generateBoard };
};

export default useBoard;
