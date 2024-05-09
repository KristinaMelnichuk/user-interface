import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6388/6388132.png' /> 
        <NavLink to='/profile'>Моя страница</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6156/6156738.png' /> 
        <NavLink to='/news'>Новости</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6069/6069761.png' /> 
        <NavLink to='/dialogs'>Мессенджер</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6388/6388068.png' />
        <NavLink to='/friends'>Друзья</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6948/6948563.png' /> 
        <NavLink to='/photo'>Фотографии</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/4194/4194726.png' /> 
        <NavLink to='/music'>Музыка</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/5323/5323720.png' /> 
        <NavLink to='/video'>Видео</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6187/6187247.png' /> 
        <NavLink to='/services'>Сервисы</NavLink>
      </div>
      <div className={c.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6388/6388088.png' />
        <NavLink to='/settings'>Настройки</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;