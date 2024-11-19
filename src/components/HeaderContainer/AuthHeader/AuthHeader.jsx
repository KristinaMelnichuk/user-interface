import { NavLink } from 'react-router-dom';
import styles from './AuthHeader.module.css';
import Logotype from './Logotype/Logotype';

const AuthHeader = (props) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Logotype />
                <div className={styles.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default AuthHeader;
