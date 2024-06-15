import styles from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div>
            <div className={styles.friendItem}>
                <img src={props.avatar} alt={props.name}/>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default FriendItem;