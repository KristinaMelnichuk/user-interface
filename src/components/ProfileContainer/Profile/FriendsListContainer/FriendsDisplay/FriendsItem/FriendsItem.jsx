import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={styles.friendItem}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.avatar} />
                <span className={styles.friendName}>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default FriendsItem;