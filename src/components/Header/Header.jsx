import { NavLink } from 'react-router-dom';
import c from './Header.module.css';

const Header = () => {
    return (
        <div className={c.header} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"  title='VKONTAKTE'/> 
         <NavLink to='/#'  > <div className={c.logoVk}>ВКОНТАКТЕ</div></NavLink>
        </div>
    );
}
export default Header;