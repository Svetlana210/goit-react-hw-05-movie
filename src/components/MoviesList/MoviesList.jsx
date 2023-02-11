import styles from './movies-list.module.css';

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <a href={id} className={styles.link}>
        {title}
      </a>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default MoviesList;
