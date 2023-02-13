import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMoviesCast } from 'api';
import Loader from 'components/Loader/Loader';
import { checkImage } from '../../components/checkPoster/checkPoster';
import styles from './cast.module.css';

const Cast = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setLoading(true);
      try {
        const data = await searchMoviesCast(id);
        setItems(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [id, error]);

  const elements = items.map(({ id, character, name, profile_path }) => (
    <li className={styles.item} key={id}>
      <img src={checkImage(profile_path)} alt={name} width="140"></img>
      <p className={styles.name}>{name}</p>
      <p className={styles.text}>Character: {character}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error</p>}
      {items.length > 0 && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default Cast;
