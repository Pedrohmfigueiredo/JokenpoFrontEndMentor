import Score from '../Score/index'
import styles from './style.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src="/images/logo.svg" alt="Logo" />
        <Score />
      </header>
    </>
  )
}

export default Header