import styles from './ProfileInfo.module.css';
import Preloader from '../../../../assets/Preloader';
import ProfileContactList from './ProfileConctactList/ProfileContactList';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileAboutMe from './ProfileAboutMe/ProfileAboutMe.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';
import Banner from './Banner/Banner.jsx';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    const { contacts } = props.profile;

    return (
        <div>
            <div className={styles.profilegrid}>
                <div className={styles.banner}>
                    <Banner />
                </div>
                <div className={styles.profileContent}>
                    <div className={styles.photosSmall}>
                        <ProfilePhoto profile={props.profile} />
                        <p className={styles.name}>{props.profile.fullName || 'Имя не указано'}</p>
                        <div>
                            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        </div>
                    </div>
                    <div className={styles.profileInfo}>
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
        </div>
    );
};

export default ProfileInfo;