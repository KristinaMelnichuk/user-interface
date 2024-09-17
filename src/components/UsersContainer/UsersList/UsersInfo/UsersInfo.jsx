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
                <div className={styles.location}>
                    {/* <span>{props.location.city}, {props.location.country}</span> */}
                </div>
            </div>
            <div >
                <OnButtonUsers
                    usersInfo={props}
                    addUsers={props.addUsers}
                    deletedUsers={props.deletedUsers} />
            </div>
        </div>
    );
}

export default UsersInfo;
