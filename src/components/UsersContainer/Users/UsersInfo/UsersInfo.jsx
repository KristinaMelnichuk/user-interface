import React from 'react';
import OnButtonUsers from './OnButtonUsers/OnButtonUsers';
import styles from './UsersInfo.module.css';

const UsersInfo = (props) => {
    return (
        <div className={styles.info}>
            <img className={styles.photos} src={props.photos.small} alt='' />
            <div className={styles.details}>
                <div className={styles.name}>
                    {props.name}
                </div>
            </div>
            <div >
                <OnButtonUsers
                    usersInfo={props}
                    follow={props.follow}
                    unfollow={props.unfollow} />
            </div>
        </div>
    );
}

export default UsersInfo;