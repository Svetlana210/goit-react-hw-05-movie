import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

const getFullName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <NavLink to="/" className={getFullName}>
            Home
          </NavLink>
          <NavLink to="/movies" className={getFullName}>
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
