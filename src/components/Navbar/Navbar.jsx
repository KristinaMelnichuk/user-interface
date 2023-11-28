import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to='/profile'>Моя страница</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/dialogs'>Мессенджер</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/news'>Новости</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/music'>Музыка</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/settings'>Настройки</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;