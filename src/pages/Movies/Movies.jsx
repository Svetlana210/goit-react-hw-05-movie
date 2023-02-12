import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMoviesByWord } from 'api';

import styles from './movies.module.css';

const Movies = () => {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMoviesByWord = async () => {
      try {
        const data = await searchMoviesByWord(search);
        setItems(data);
      } catch (error) {
      } finally {
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
      <SearchForm onSubmit={onSearchMovies} />
      <MoviesList items={items} />
    </div>
  );
};

export default Movies;
