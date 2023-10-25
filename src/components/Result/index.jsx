import { useContext } from "react";
import Button from "../Button";
import { GameContext } from "../../contexts/GameContext";
import styles from "./style.module.css";

function Result() {
  const { result, resetGame } = useContext(GameContext);
  return (
    <div className={styles.result}>
      <h3>{result}</h3>
      {result ? (
        <Button type={result} value="Play Again" onClick={resetGame} />
      ) : null}
    </div>
  );
}

export default Result;
