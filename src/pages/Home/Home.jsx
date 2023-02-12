import { useState, useEffect } from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';
import { searchMovies } from '../../api';
import Loader from 'components/Loader/Loader';

import styles from './home.module.css';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovies();
  }, [setItems]);

  return (
    <div className={styles.wrap}>
      <h2>Trending today</h2>
      {loading && <Loader />}
      {error && <p>Error</p>}
      <MoviesList items={items} />
    </div>
  );
};

export default Home;
