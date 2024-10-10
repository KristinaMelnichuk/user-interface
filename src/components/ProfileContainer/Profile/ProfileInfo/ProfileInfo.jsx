import styles from './ProfileInfo.module.css';
import Preloader from '../../../../assets/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const { contacts } = props.profile;
   
    const contactList = [
        { name: 'Facebook', url: contacts.facebook },
        { name: 'Vk', url: contacts.vk },
        { name: 'Twitter', url: contacts.twitter },
        { name: 'GitHub', url: contacts.github },
        { name: 'Instagram', url: contacts.instagram },
    ];

    const renderContacts = (contacts) => {
        return contacts.map((contact) =>
            contact.url && (
                <li key={contact.name}>
                    {contact.name}: <a href={`https://${contact.url}`} target="_blank" rel="noopener noreferrer">{contact.url}</a>
                </li>
            )
        );
    };

    return (
        <div className={styles.profilegrid}>
            <div>
                {/*Статическое изображение(обои)*/}
                <img src="https://interier-foto.ru/wp-content/uploads/2014/11/gora-beluha6137.jpg" />
            </div>
            <div className={styles.photosSmall}>
                {/*Загрузка фото профиля пользователя*/}
                <img src={props.profile.photos.large || 'https://via.placeholder.com/150'} />
            </div>
            <div>
                <p>Имя: {props.profile.fullName || 'Имя не указано'}</p>
                <p>Город: {props.profile.city || 'Город не указан'}</p>
                <p>Обо мне: {props.profile.aboutMe}</p>
                <p>Статус Работы: {props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                Контакты:
                <ul>
                    {renderContacts(contactList)}
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;