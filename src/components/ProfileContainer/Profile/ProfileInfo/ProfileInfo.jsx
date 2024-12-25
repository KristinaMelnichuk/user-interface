import styles from './ProfileInfo.module.css';
import Preloader from '../../../../assets/Preloader/Preloader.jsx';
import ProfileContactList from './ProfileConctactList/ProfileContactList';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileAboutMe from './ProfileAboutMe/ProfileAboutMe.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';
import Banner from './Banner/Banner.jsx';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    };

    const { contacts } = props.profile;
    return (
        <div className={styles.profilegrid}>
            <div className={styles.banner}>
                <Banner />
            </div>

            <div className={styles.profileContent}>
                <section className={styles.photosSmall}>
                    <ProfilePhoto profile={props.profile} />
                </section>

                <section>
                    <p className={styles.name}>
                        {props.profile.fullName || 'Имя не указано'}
                    </p>
                </section>

                <section>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus} />
                </section>

                <section className={styles.profileInfo}>
                    <ProfileAboutMe
                        profile={props.profile} />
                </section>
            </div>

            <section className={styles.contacts}>
                <h3>Контакты:</h3>
                <ul>
                    <ProfileContactList contacts={contacts} />
                </ul>
            </section>
        </div>
    );
};

export default ProfileInfo;