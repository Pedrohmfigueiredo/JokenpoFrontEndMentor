import styles from './style.module.css'
import Token from '../Token'
import Result from '../Result'
import Effect from '../Effect'
import { useContext } from 'react'
import { GameContext } from '../../contexts/GameContext'

function Battle() {
    const {player, cpu, result} = useContext(GameContext)

  return (
    <div className={styles.battle}>
        <div>
            <h4>You Picked</h4>
            <Token choice={player}>
              { result == 'you win' ? <Effect /> : null}
            </Token>
        </div>
        <div>
          { result ? <Result className={styles.result}/> : null }
        </div>
        <div>
            <h4>The House Picked</h4>
            <Token choice={cpu}>
            { result == 'you lose' ? <Effect /> : null}
            </Token>
        </div>
    </div>
  )
}

export default Battle