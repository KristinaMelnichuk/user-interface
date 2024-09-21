import React from 'react';
import { NavLink } from 'react-router-dom';
import OnButtonUsers from './OnButtonUsers/OnButtonUsers';
import styles from './UsersInfo.module.css';

const UsersInfo = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={styles.info}>
            <img className={styles.photos} src={props.photos.small} />
            <div className={styles.details}>
                <div className={styles.name}>
                    <NavLink to={path}>{props.name}</NavLink>
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