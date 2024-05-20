import styles from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={styles.dialogMessage}>
            {props.message}
        </div>
    )
}

export default Message;