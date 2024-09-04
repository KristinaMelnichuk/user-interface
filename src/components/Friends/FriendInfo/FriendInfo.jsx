import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FriendInfo.module.css';
import OnButtonFriend from './OnButtonFriend/OnButtonFriend';

const FriendInfo = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={styles.friendInfo}>
            <img className={styles.friendPhotos} src={props.photos.small} />
            <div className={styles.friendDetails}>
                <div className={styles.friendName}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
                <div className={styles.friendLocation}>
                    {/* <span>{props.location.city}, {props.location.country}</span> */}
                </div>
            </div>
            <div >
                <OnButtonFriend 
                 friendInfo={props} 
                 addFriend={props.addFriend} 
                 deletedFriend={props.deletedFriend}/>
            </div>
        </div>
    );
}

export default FriendInfo;
