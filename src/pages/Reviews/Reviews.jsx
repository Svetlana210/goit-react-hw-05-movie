import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMoviesReviews } from 'api';
import Loader from 'components/Loader/Loader';
import styles from './reviews.module.css';

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoading(true);
      try {
        const data = await searchMoviesReviews(id);
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [id, error]);

  const elements = items.map(({ author, content, id }) => (
    <li className={styles.item} key={id}>
      <p className={styles.name}>Author: {author}</p>
      <p className={styles.text}>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error</p>}
      {items.length > 0 && <ul className={styles.list}>{elements}</ul>}
      {items.length === 0 && (
        <p className={styles.textreview}>
          We don't have any reviews for this movie
        </p>
      )}
    </>
  );
};
export default Reviews;
