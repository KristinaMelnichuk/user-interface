import styles from './Message.module.css';
import React from 'react';

const Message = (props) => {
    return (
        <div className={styles.dialogMessage}>
            {props.message}
        </div>
    )
};

export default Message;