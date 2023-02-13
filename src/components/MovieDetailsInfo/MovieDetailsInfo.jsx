import styles from './movie-details-info.module.css';
import { checkPoster } from 'components/checkPoster/checkPoster';

const MovieDetailsInfo = ({ props }) => {
  const {
    overview,
    genres = [],
    title,
    release_date = '',
    vote_average,
    poster_path,
  } = props;

  const genreList = genres.map(genre => (
    <li className={styles.item} key={genre.id}>
      {genre.name}
    </li>
  ));

  //   const posterUrl = 'https://image.tmdb.org/t/p/w500/' + poster_path;

  let year = release_date.substring(0, 4);
  return (
    <div className={styles.container}>
      <img src={checkPoster(poster_path)} alt={title} width="300" />
      <div className={styles.wrap}>
        <h2>
          {title}
          <span className={styles.data}>({year})</span>
        </h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <p className={styles.text}>Overview</p>
        <p className={styles.textbig}>{overview}</p>
        <p className={styles.text}>Genres</p>
        <ul className={styles.list}>{genreList}</ul>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;
