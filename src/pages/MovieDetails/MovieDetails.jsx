import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMoviesDetails } from 'api';
import MovieDetailsInfo from 'components/MovieDetailsInfo/MovieDetailsInfo';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

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

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <MovieDetailsInfo props={details} />
    </>
  );
};

export default MovieDetails;
