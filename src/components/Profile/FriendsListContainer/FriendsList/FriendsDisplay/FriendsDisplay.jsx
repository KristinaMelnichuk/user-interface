import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem.jsx';
import styles from './FriendsDisplay.module.css';

const FriendsDisplay = (props) => {
    const friendsCount = props.friendsList.length;
    // Генерация элементов списка
    const friendsElements = props.friendsList.map(f => (
        <FriendsItem name={f.name} avatar={f.avatar} id={f.id} key={f.id} />
    ));

    return (
        <div className={styles.listGrid}>
            <div className={styles.element}>
                <NavLink to='/friends'>
                    Друзья <span>{friendsCount}</span>
                </NavLink>
            </div>
            <div className={styles.grid}>
                {friendsElements}
            </div>
        </div>
    );
}

export default FriendsDisplay;