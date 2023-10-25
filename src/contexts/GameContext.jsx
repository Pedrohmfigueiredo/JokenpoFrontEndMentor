import { createContext, useState } from "react";

export const GameContext = createContext("");

// eslint-disable-next-line react/prop-types
export function GameProvider({ children }) {
  const [player, setPlayer] = useState("");
  const [cpu, setCpu] = useState("");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  function checkResult() {
    let rockWin = player == "🪨" && cpu == "✂️";
    let paperWin = player == "🧻" && cpu == "🪨";
    let scissorsWin = player == "✂️" && cpu == "🧻";

    if (player == cpu) setResult("draw");
    else if (rockWin | paperWin | scissorsWin) setResult("you win");
    else setResult("you lose");
  }

  function addScore() {
    setScore(score + 1);
  }
  function removeScore() {
    setScore(score - 1);
  }

  function resetGame() {
    setResult(null);
    setPlayer(null);
    setCpu(null);
  }

  return (
    <GameContext.Provider
      value={{
        player,
        cpu,
        score,
        result,
        setPlayer,
        setCpu,
        addScore,
        removeScore,
        resetGame,
        checkResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
