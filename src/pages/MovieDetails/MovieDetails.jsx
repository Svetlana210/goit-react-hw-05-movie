import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { searchMoviesDetails } from 'api';
import MovieDetailsInfo from 'components/MovieDetailsInfo/MovieDetailsInfo';
import Loader from 'components/Loader/Loader';
import styles from './movie-details.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await searchMoviesDetails(id);

        setDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id, error]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error</p>}
      <button className={styles.btn} onClick={goBack}>
        &#8592; Go back
      </button>
      <MovieDetailsInfo props={details} />
      <div className={styles.container}>
        <h2 className={styles.title}>Additional information</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="cast" state={{ from }} className={styles.link}>
              Cast
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="reviews" state={{ from }} className={styles.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
