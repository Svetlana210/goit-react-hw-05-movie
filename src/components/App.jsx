import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movie">
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
};
