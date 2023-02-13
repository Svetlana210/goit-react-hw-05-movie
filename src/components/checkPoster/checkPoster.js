import noPoster from '../MovieDetailsInfo/no-poster-available.png';
import noImage from '../../pages/Cast/no-image.png';

export const checkPoster = img => {
  if (img) {
    return `https://image.tmdb.org/t/p/w500/${img}`;
  }
  return noPoster;
};

export const checkImage = img => {
  if (img) {
    return `https://image.tmdb.org/t/p/w500/${img}`;
  }
  return noImage;
};
