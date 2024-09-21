import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png" title='VKONTAKTE'
                />
            </div>
            <div className={styles.logoVk}>
                <NavLink to='https://vk.com/'>
                    VKontakte
                </NavLink>
            </div>
        </div>
    );
}
export default Header;