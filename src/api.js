import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'ccd726dee91d403c616acd8dbc070a9c',
  },
});

export const searchMovies = async (page = 1, period = 'week') => {
  const { data } = await instance.get(`/trending/movie/${period}`, {
    params: { page },
  });
  return data.results;
};

export const searchMoviesByWord = async (query, page = 1) => {
  const { data } = await instance.get(`/search/movie`, {
    params: { query, page },
  });
  return data.results;
};

export const searchMoviesDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`, {});
  return data;
};

export const searchMoviesCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`, {});
  return data;
};
export const searchMoviesReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`, {});
  return data;
};
