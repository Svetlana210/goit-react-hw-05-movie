import { useState, useEffect } from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';
import { searchMovies } from '../../api';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

import styles from './home.module.css';

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(page);
        setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovies();
  }, [setItems, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.wrap}>
      <h2>Trending today</h2>
      {loading && <Loader />}
      {error && <p>Error</p>}
      <MoviesList items={items} />
      {Boolean(items.length) && <Button onClick={loadMore} />}
    </div>
  );
};

export default Home;
