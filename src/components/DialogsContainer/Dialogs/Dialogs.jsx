import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageSubmitForm from './MessageSubmitForm/MessageSubmitForm.jsx';

const Dialogs = (props) => {
    const dialogsElements = props.dialogItems.map(d =>
        <DialogItem
            sender={d.sender}
            avatar={d.avatar}
            id={d.id}
            key={d.id}
        />);

    const messagesElements = props.messageItems.map(m =>
        <Message
            message={m.messages}
            key={m.id}
        />);

    return (
        <div className={styles.dialogsandMessages}>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <MessageSubmitForm
                        addMessage={props.addMessage}
                        updateNewMessageBody={props.updateNewMessageBody}
                    />
                </div>
            </div>
        </div>
    )
};

export default Dialogs;