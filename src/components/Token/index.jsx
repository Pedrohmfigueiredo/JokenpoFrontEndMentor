/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styles from "./style.module.css";

import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

function Token(props) {
  const choices = {
    "🪨": "rock",
    "🧻": "paper",
    "✂️": "scissors",
  };

  const { setPlayer, player } = useContext(GameContext);

  return (
    <button
      className={styles.coin}
      color={choices[props.choice]}
      onClick={() => setPlayer(props.choice)}
      disabled={player ? true : false}
    >
      <div>
        {props.choice ? (
          <img
            src={`/images/icon-${choices[props.choice]}.svg`}
            alt={choices[props.choice]}
          />
        ) : null}
      </div>
      {props.children}
    </button>
  );
}

Token.propTypes = {
  choice: PropTypes.string,
};

export default Token;
