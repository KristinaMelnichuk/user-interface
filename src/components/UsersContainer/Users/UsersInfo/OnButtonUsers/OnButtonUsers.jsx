import React from 'react';
import styles from './Button.module.css';
import axios from 'axios';

const axiosConfig = {
    withCredentials: true,
    headers: { "API-KEY": '2d2f55a1-7d92-4f48-9d23-6fe8f7ea86dc' },
}

const OnButtonUsers = ({ usersInfo, follow, unfollow, toggleFollowingProgress, followingInProgress }) => {
    const isFollowingInProgress = followingInProgress && followingInProgress.includes(usersInfo.id);

    const handleFollow = () => {
        toggleFollowingProgress(true, usersInfo.id); //Дизейблим кнопку
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${usersInfo.id}`, {}, axiosConfig)
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(usersInfo.id); // Обновление состояния в Redux
                }
            })
            .catch(error => {
                console.error("Ошибка подписки:", error);
            })
            .finally(() => {
                toggleFollowingProgress(false, usersInfo.id); // Разблокируем кнопку
            });
    };

    const handleUnfollow = () => {
        toggleFollowingProgress(true, usersInfo.id); //Дизейблим кнопку
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usersInfo.id}`, axiosConfig)
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollow(usersInfo.id); // Обновление состояния в Redux
                }
            })
            .catch(error => {
                console.error("Ошибка отписки:", error);
            })
            .finally(() => {
                toggleFollowingProgress(false, usersInfo.id); // Разблокируем кнопку
            });
    };

    return (
        <div>
            {usersInfo.followed
                ? <button
                    className={styles.button}
                    onClick={handleUnfollow}
                    disabled={isFollowingInProgress}
                >
                    Отписаться
                </button>
                : <button
                    className={styles.button}
                    onClick={handleFollow}
                    disabled={isFollowingInProgress}
                >
                    Подписаться
                </button>
            }
        </div>
    );
};

export default OnButtonUsers;
