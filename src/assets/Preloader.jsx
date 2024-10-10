import preloaderSvg from './preloaderSvg.gif';
import styles from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloaderSvg} alt='loading...' />
        </div>
    )
};

export default Preloader;