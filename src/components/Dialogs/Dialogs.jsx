import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";

const Dialogs = (props) => {
    // Создаем элементы для диалогов и сообщений
    const dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem sender={d.sender} avatar={d.avatar} id={d.id} />);
    const messagesElements = props.messagesPage.messages.map(m => <Message message={m.messages} />);
    
    // Создаем ссылку на текстовое поле
    const newMessageRef = React.createRef();

    const addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    };

    const onMessageChange = () => {
        const text = newMessageRef.current.value;
        const action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
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