import React from 'react';
import styles from './Button.module.css';

const OnButtonUsers = ({ userId,  isFollowed, follow, unfollow, followingInProgress }) => {
    const isFollowingInProgress = followingInProgress && followingInProgress.includes(userId);

    const handleFollow = () => {
        follow(userId); // Вызов экшена для подписки
    };

    const handleUnfollow = () => {
        unfollow(userId); // Вызов экшена для отписки
    };

    return (
        <div>
            {isFollowed
                ? <button
                    className={styles.button}
                    onClick={handleUnfollow}
                    disabled={isFollowingInProgress} // Дизейблим кнопку во время выполнения
                >
                    Отписаться
                </button>
                : <button
                    className={styles.button}
                    onClick={handleFollow}
                    disabled={isFollowingInProgress} // Дизейблим кнопку во время выполнения
                >
                    Подписаться
                </button>
            }
        </div>
    );
};

export default OnButtonUsers;
