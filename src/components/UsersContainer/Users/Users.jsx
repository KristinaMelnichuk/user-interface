import React from 'react';
import UsersInfo from './UsersInfo/UsersInfo';
import styles from './Users.module.css';

const Users = (props) => {

const {users, unfollow, follow, followingInProgress, loadMoreUsers} = props;

    const usersList = users.map(user => (
        <UsersInfo
            {...user} // name={user.name}, photos={user.photos},  id={user.id}
            key={user.id}
            isFollowed={user.followed}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
        />
    ));

    return (
        <div>
            {usersList}
            <div>
                <button
                    className={styles.button}
                    onClick={loadMoreUsers}>
                    Показать пользователей
                </button>
            </div>
        </div>
    );
}

export default Users;