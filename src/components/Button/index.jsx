import styles from "./style.module.css";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button onClick={props.onClick} type={props.type} className={styles.btn}>
      {props.value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: "fill",
};

export default Button;
