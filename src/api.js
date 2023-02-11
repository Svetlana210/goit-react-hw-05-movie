import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=ccd726dee91d403c616acd8dbc070a9c';

export const searchMovies = async () => {
  const { data } = await axios.get(`${URL}/trending/movie/week${API_KEY}`);
  return data;
};
