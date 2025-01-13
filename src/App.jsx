import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import useBoard from "./hooks/useBoard";

function App() {
  const [players, setPlayers] = useState([
    { id: 0, position: 1 },
    { id: 1, position: 1 },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceRoll, setDiceRoll] = useState(1);
  const [winner, setWinner] = useState(null);
  const { ladders, boardSize, snakes } = useBoard();

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    movePlayer(roll);
  };

  const movePlayer = (roll) => {
    const updatedPlayers = players;
    const player = updatedPlayers[currentPlayer];
    let newPosition = player.position + roll;

    if (newPosition > boardSize * boardSize) {
      newPosition = player.position;
    }

    if (ladders[newPosition]) {
      newPosition = ladders[newPosition];
    } else if (snakes[newPosition]) {
      newPosition = snakes[newPosition];
    }

    if (
      currentPlayer === players.length - 1 &&
      player.position === updatedPlayers[0].position
    ) {
      setPlayers((prev) =>
        prev.map((player) =>
          player.id === 0 ? { ...prev, position: 1 } : player
        )
      );
    } else if (
      currentPlayer === 0 &&
      player.position === updatedPlayers[1].position
    ) {
      setPlayers((prev) =>
        prev.map((player) =>
          player.id === 1 ? { ...prev, position: 1 } : player
        )
      );
    }

    player.position = newPosition;
    setPlayers(updatedPlayers);
    if (player.position === 100) {
      setWinner(currentPlayer);
    }
    setCurrentPlayer(currentPlayer === 1 ? 0 : currentPlayer + 1);
  };

  const resetGame = () => {
    setPlayers([{ position: 1 }, { position: 1 }]);
    setCurrentPlayer(0);
  };

  return (
    <div className="text-center flex flex-col m-5">
      <h1 className="text-3xl font-bold">Snakes and Ladders</h1>
      <div className="flex justify-evenly">
        <Board players={players} />
        <div className="mt-5 flex flex-col justify-center">
          {winner && (
            <p className="text-xl font-bold italic">
              Player {winner + 1} is the Winner !
            </p>
          )}
          <p>Dice Roll : {diceRoll}</p>
          <p>Current Player : Player {currentPlayer + 1}</p>
          <button
            className="border border-black shadow-sm shadow-black px-4 rounded py-1 my-4"
            onClick={rollDice}
            disabled={winner}
          >
            Roll Dice
          </button>
          <button
            className="border border-black shadow-sm shadow-black px-4 rounded py-1"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
