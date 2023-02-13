import styles from './loader.module.css';
import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass={styles.loader}
    />
  );
};

export default Loader;
