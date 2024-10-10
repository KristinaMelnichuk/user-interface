import React from 'react';
import OnButtonUsers from './OnButtonUsers/OnButtonUsers';
import styles from './UsersInfo.module.css';
import { NavLink } from 'react-router-dom';

const UsersInfo = (props) => {
    return (
        <div className={styles.info}>
            <NavLink to={'/profile/' + props.id}>
                <img className={styles.photos} src={props.photos.small} alt='' />
            </NavLink>
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