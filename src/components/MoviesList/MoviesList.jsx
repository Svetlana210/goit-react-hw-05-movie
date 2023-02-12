import { Link } from 'react-router-dom';
import styles from './movies-list.module.css';

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link to={`/movies/${id}`} className={styles.link}>
        {title}
      </Link>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default MoviesList;
