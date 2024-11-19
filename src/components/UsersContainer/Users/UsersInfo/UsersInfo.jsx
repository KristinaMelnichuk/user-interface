import React from 'react';
import OnButtonUsers from './OnButtonUsers/OnButtonUsers';
import styles from './UsersInfo.module.css';
import { NavLink } from 'react-router-dom';

const UsersInfo = (props) => {
    const { follow, unfollow, followingInProgress, isFollowed } = props;

    return (
        <div className={styles.userContainer}>
            <div className={styles.info}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={styles.photos} src={props.photos.small} alt='' />
                </NavLink>
                <div className={styles.details}>
                    <div className={styles.name}>
                        {props.name}
                    </div>
                    <div className={styles.location}>
                        {/* Здесь можно отобразить локацию, если она есть */}
                    </div>
                </div>
                <div>
                    <OnButtonUsers
                        userId={props.id}
                        isFollowed={isFollowed}
                        follow={follow} // Передаем экшен для подписки
                        unfollow={unfollow} // Передаем экшен для отписки
                        followingInProgress={followingInProgress}
                    />
                </div>
            </div>
        </div>
    );
}

export default UsersInfo;