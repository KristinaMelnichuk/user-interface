import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";
import { addMessageActionCreate, onMessageChangeActionCreate } from "../../redux/state.js";

const Dialogs = (props) => {
    const dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem sender={d.sender} avatar={d.avatar} id={d.id} />);
    const messagesElements = props.messagesPage.messages.map(m => <Message message={m.messages} />);

    const newMessageRef = React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreate());
    };

    let onMessageChange = () => {
        let text = newMessageRef.current.value;
        let action = onMessageChangeActionCreate(text);
        props.dispatch(action);
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
                        onChange={onMessageChange}
                        ref={newMessageRef}
                        value={props.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;