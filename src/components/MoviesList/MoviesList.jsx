import { Link, useLocation } from 'react-router-dom';
import styles from './movies-list.module.css';
import { checkPoster } from 'components/checkPoster/checkPoster';
import { PropTypes } from 'prop-types';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(
    ({ id, title, poster_path, release_date = '', vote_average }) => (
      <li key={id} className={styles.item}>
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          className={styles.link}
        >
          <div className={styles.wrap}>
            <img
              src={checkPoster(poster_path)}
              alt={title}
              width="240"
              height="345"
            />
            <p className={styles.vote}>{Math.round(vote_average * 10)}%</p>
            <div className={styles.textcontainer}>
              <p className={styles.texttitle}>{title}</p>
              <p className={styles.text}>{release_date.substring(0, 4)}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  );
  return <ul className={styles.list}>{elements}</ul>;
};

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
