import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect.js';


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

    const newMessageRef = React.createRef();

    const handleAddMessage = () => {
        props.addMessage();
    };

    const handleMessageChange = () => {
        const body = newMessageRef.current.value;
        props.updateNewMessageBody(body);
    };

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
                    <textarea
                        onChange={handleMessageChange}
                        ref={newMessageRef}
                        value={props.newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={handleAddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


const AuthRedirectComponent = withAuthRedirect(Dialogs);

export default AuthRedirectComponent;