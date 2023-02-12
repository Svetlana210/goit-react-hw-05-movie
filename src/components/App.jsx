import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movie">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
