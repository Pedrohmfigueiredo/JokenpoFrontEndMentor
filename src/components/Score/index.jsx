import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext'
import styles from './style.module.css'

function Score() {

  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
        <span>Score</span>
        <h3>{score}</h3>
    </div>
  )
}

export default Score