import React from "react";
import styles from './Button.module.css';

const OnButtonFriend = ({ usersInfo, addUsers, deletedUsers }) => {
    return (
        <div >
            {usersInfo.buttonUsers
                ? <button className={styles.button} onClick={() => { addUsers(usersInfo.id) }}>Добавить в друзья</button>
                : <button className={styles.button} onClick={() => { deletedUsers(usersInfo.id) }}>Удалить из друзей</button>
            }
        </div>
    )
}
export default OnButtonFriend;