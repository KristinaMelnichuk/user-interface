import FriendItem from './FriendItem/FriendItem';
import styles from './FriendsList.module.css';
import { NavLink } from 'react-router-dom';

const FriendsList = (props) => {
    const friendsElements = props.friendsList.map(f => <FriendItem name={f.name} avatar={f.avatar} id={f.id} key={f.id} />);
    
    return (
        <div className={styles.listGrid}>
            <div className={styles.element}>
                <NavLink to='/friends'>Друзья</NavLink>
            </div>
            <div className={styles.grid}>
                {friendsElements}
            </div>
        </div>
    )
}

export default FriendsList;