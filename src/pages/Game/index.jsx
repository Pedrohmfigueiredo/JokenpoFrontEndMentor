import style from "./style.module.css";

import Header from "../../components/Header";
import Options from "../../components/Options";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Battle from "../../components/Battle";

import { useContext, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContexts";
import { GameContext } from "../../contexts/GameContext";

function Game() {
  const { modal, openModal } = useContext(ModalContext);
  const { player, cpu, result, setCpu, addScore, removeScore, checkResult } =
    useContext(GameContext);
  const choices = ["🪨", "🧻", "✂️"];

  useEffect(() => {
    if (player) {
      let random = choices[Math.floor(Math.random() * choices.length)];
      setTimeout(() =>setCpu(random), 1500);
    }
  }, [player]);

  useEffect(() => {
    if (player && cpu) {
      checkResult(player, cpu);
    }
  }, [cpu]);

  useEffect(() => {
    if (result == "you win") addScore();
    else if (result == "you lose") removeScore();
  }, [result]);

  return (
    <>
      <div className={style.game}>
        <Header />
        {player ? <Battle /> : <Options />}
        <Button value="Rules" type="outline" onClick={() => openModal()} />
      </div>

      {modal ? <Modal /> : null}
    </>
  );
}

export default Game;
