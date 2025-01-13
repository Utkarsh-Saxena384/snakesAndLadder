import useBoard from "../hooks/useBoard";

/* eslint-disable react/prop-types */
const Board = ({ players = [] }) => {
  const { ladders, snakes, generateBoard } = useBoard();
  const board = generateBoard();

  return (
    <div className="flex flex-col-reverse m-5">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="w-20 h-20 border border-black flex justify-center items-center relative"
            >
              <div className="flex flex-col">
                <span>{cell}</span>
                <span className="text-[9px]">
                  {ladders[cell] && `(Ladder go to ${ladders[cell]})`}
                </span>
                <span className="text-[9px]">
                  {snakes[cell] && `(Snake go to ${snakes[cell]})`}
                </span>
              </div>
              {players.map((p, idx) =>
                p.position === cell ? (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-[50%] absolute left-1 player-${
                      idx + 1
                    } ${idx + 1 === 1 ? "top-1" : "bottom-1"} `}
                  >
                    P{idx + 1}
                  </div>
                ) : null
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
