import React from 'react';
import styles from './Button.module.css';
import axios from 'axios';

const OnButtonFriend = ({ usersInfo, follow, unfollow }) => {
    const handleFollow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${usersInfo.id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": '2d2f55a1-7d92-4f48-9d23-6fe8f7ea86dc'
            }
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                follow(usersInfo.id); // Обновление состояния в Redux
            } else {
                console.error(response.data.messages[0]); // Логируем сообщение об ошибке
            }
        })
        .catch(error => {
            console.error("Ошибка подписки:", error);
        });
    };

    const handleUnfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usersInfo.id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": '2d2f55a1-7d92-4f48-9d23-6fe8f7ea86dc'
            }
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                unfollow(usersInfo.id); // Обновление состояния в Redux
            } else {
                console.error(response.data.messages[0]); // Логируем сообщение об ошибке
            }
        })
        .catch(error => {
            console.error("Ошибка отписки:", error);
        });
    };

    return (
        <div>
            {usersInfo.followed
                ? <button className={styles.button} onClick={handleUnfollow}>Отписаться</button>
                : <button className={styles.button} onClick={handleFollow}>Подписаться</button>
            }
        </div>
    )
}

export default OnButtonFriend;
