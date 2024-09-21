import React from 'react';
import styles from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={styles.friendItem}>
            <img src={props.avatar}  />
            <span className={styles.friendName}>{props.name}</span>
        </div>
    );
}

export default FriendsItem;