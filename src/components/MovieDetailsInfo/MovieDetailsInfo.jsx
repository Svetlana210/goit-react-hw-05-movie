import styles from './movie-details-info.module.css';

const MovieDetailsInfo = ({ props }) => {
  const {
    overview,
    genres = [],
    title,
    release_date,
    vote_average,
    poster_path,
  } = props;
  //   console.log(release_date.slice(0, 4));
  const genreList = genres.map(genre => <li key={genre.id}>{genre.name}</li>);

  const posterUrl = 'https://image.tmdb.org/t/p/w500/' + poster_path;

  //   let year = release_date.substring(0, 4);
  return (
    <div className={styles.container}>
      <img src={posterUrl} alt={title} width="300" />
      <div className={styles.wrap}>
        <h2>
          {title}
          <span className={styles.data}>({release_date})</span>
        </h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <p className={styles.text}>Overview</p>
        <p>{overview}</p>
        <p className={styles.text}>Genres</p>
        <p>{genreList}</p>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;
