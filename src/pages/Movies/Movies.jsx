import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMoviesByWord } from 'api';
import Loader from 'components/Loader/Loader';

import styles from './movies.module.css';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMoviesByWord = async () => {
      setLoading(true);
      try {
        const data = await searchMoviesByWord(search);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchMoviesByWord();
    }
  }, [search]);

  const onSearchMovies = search => {
    setSearchParams({ search });
  };
  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {error && <p>Error</p>}
      <SearchForm onSubmit={onSearchMovies} />
      <MoviesList items={items} />
    </div>
  );
};

export default Movies;
