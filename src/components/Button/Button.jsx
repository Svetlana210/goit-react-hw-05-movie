import styles from './button.module.css';
import PropTypes from 'prop-types';
const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
