import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logotype from './Logotype/Logotype';

const Header = (props) => {
    return (
        <div className={styles.headerContent}>
            <Logotype />
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
}
export default Header;