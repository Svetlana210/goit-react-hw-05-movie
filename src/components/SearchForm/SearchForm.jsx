import { useState } from 'react';

import styles from './search-form.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setState(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={state}
        type="text"
        name="q"
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        required
      />
      <button type="submit" className={styles.button}>
        <span className={styles.label}>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
