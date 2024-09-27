import React from 'react';
import UsersInfo from './UsersInfo/UsersInfo';
import styles from './Users.module.css';

const Users = (props) => {
    const usersList = props.users.map(u => (
        <UsersInfo
            name={u.name}
            photos={u.photos}
            id={u.id}
            key={u.id}
            buttonUsers={u.buttonUsers}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    ));

    return (
        <div>
            <div>{usersList}</div>
            <div>
                <button className={styles.button} onClick={props.loadMoreUsers}>
                    Показать пользователей
                </button>
            </div>
        </div>
    );
}

export default Users;