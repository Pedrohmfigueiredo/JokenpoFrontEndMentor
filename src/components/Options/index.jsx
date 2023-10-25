import Token from '../Token'
import style from './styles.module.css'

function Options() {
	return (
		<div className={style.options}>
			<img src="/images/bg-triangle.svg" alt="triangle" />
			<Token choice="🪨" />
			<Token choice="🧻" />
			<Token choice="✂️" />
		</div>
	)
}

export default Options
