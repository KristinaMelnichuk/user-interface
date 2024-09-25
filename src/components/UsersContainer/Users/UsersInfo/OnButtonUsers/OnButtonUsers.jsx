import React from 'react';
import styles from './Button.module.css';

const OnButtonFriend = ({ usersInfo, follow, unfollow }) => {
    return (
        <div >
            {usersInfo.buttonUsers
                ? <button className={styles.button} onClick={() => { follow(usersInfo.id) }}>Добавить в друзья</button>
                : <button className={styles.button} onClick={() => { unfollow(usersInfo.id) }}>Удалить из друзей</button>
            }
        </div>
    )
}
export default OnButtonFriend;