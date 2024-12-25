import React from 'react';
import OnButtonUsers from './OnButtonUsers/OnButtonUsers';
import styles from './UsersInfo.module.css';
import { NavLink } from 'react-router-dom';

const UsersInfo = (props) => {
    const { id, name, photos, follow, unfollow, followingInProgress, isFollowed } = props;

    return (
        <div className={styles.info}>
            <section>
                <NavLink to={`/profile/${id}`}>
                    <img
                        className={styles.photos}
                        src={photos.small}
                        alt=''
                    />
                </NavLink>
            </section>

            <section className={styles.name}>
                {name}
            </section>

            {/* Локация, если будет добавлена */}
            <section className={styles.location} />

            <section>
                <OnButtonUsers
                    userId={props.id}
                    isFollowed={isFollowed}
                    follow={follow} // Передаем экшен для подписки
                    unfollow={unfollow} // Передаем экшен для отписки
                    followingInProgress={followingInProgress}
                />
            </section>
        </div>
    );
};

export default UsersInfo;