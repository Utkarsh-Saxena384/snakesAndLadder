import { useState } from "react";

const Dice = () => {
  const [diceNum, setDiceNum] = useState(Math.floor(Math.random() * 6) + 1);
  const generateRandomDiceNumber = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNum(randomNum);
  };
  return (
    <div className="flex flex-col items-center py-4">
      <div className="border shadow-md shadow-black w-20 h-20 border-black">
        <span className="flex justify-center items-center h-full text-2xl font-bold">
          {diceNum}
        </span>
      </div>
      <button
        onClick={generateRandomDiceNumber}
        className="py-2 mt-4 shadow shadow-black border border-black px-4"
      >
        Roll
      </button>
    </div>
  );
};

export default Dice;
