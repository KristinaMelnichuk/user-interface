import styles from './ProfileInfo.module.css';
import Preloader from '../../../../assets/Preloader';
import ProfileContactList from './ProfileConctactList/ProfileContactList';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileAboutMe from './ProfileAboutMe/ProfileAboutMe.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    const { contacts } = props.profile;

    return (
        <div className={styles.profilegrid}>
            <div className={styles.banner}>
                {/* Статическое изображение */}
                <img src="https://interier-foto.ru/wp-content/uploads/2014/11/gora-beluha6137.jpg" alt="Banner" />
            </div>
            <div className={styles.profileContent}>
                {/*Компонента Фото*/}
                <div className={styles.photosSmall}>
                    <ProfilePhoto profile={props.profile} />
                    <p className={styles.name}>{props.profile.fullName || 'Имя не указано'}</p>
                </div>
                <div className={styles.profileInfo}>
                    {/*Компонента Обо мне*/}
                    <ProfileAboutMe profile={props.profile} />
                </div>
            </div>
            <div className={styles.contacts}>
                Контакты:
                <ul>
                    < ProfileContactList contacts={contacts} />
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;