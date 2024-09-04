import React from "react";
import styles from './Button.module.css';

const OnButtonFriend = ({ friendInfo, addFriend, deletedFriend }) => {
    return (
        <div >
            {friendInfo.buttonFriend
                ? <button className={styles.button} onClick={() => { addFriend(friendInfo.id) }}>Добавить в друзья</button>
                : <button className={styles.button} onClick={() => { deletedFriend(friendInfo.id) }}>Удалить из друзей</button>
            }
        </div>
    )
}
export default OnButtonFriend;