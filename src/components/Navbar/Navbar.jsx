import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const navItems = [
  { icon: 'https://cdn-icons-png.flaticon.com/512/6388/6388132.png', text: 'Моя страница', link: '/profile' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6156/6156738.png', text: 'Новости', link: '/news' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6069/6069761.png', text: 'Мессенджер', link: '/dialogs' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6069/6069761.png', text: 'Звонки', link: '/Calls' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6388/6388068.png', text: 'Друзья', link: '/friends' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6388/6388068.png', text: 'Сообщества', link: '/Communities' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6948/6948563.png', text: 'Фотографии', link: '/photo' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/4194/4194726.png', text: 'Музыка', link: '/music' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/5323/5323720.png', text: 'Видео', link: '/video' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6187/6187247.png', text: 'Сервисы', link: '/services' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/6388/6388088.png', text: 'Настройки', link: '/settings' },
];

const Navbar = () => {
  // Создаем элементы навигации на основе данных из массива
  const navLinks = navItems.map((item, index) => (
    <NavLink key={index} to={item.link} className={styles.item}>
      <div className={styles.iconText}>
        <img src={item.icon} alt={item.text} />
        <span>{item.text}</span>
      </div>
    </NavLink>
  ));

  return (
    <nav className={styles.nav}>
      {navLinks}
    </nav>
  );
};

export default Navbar;