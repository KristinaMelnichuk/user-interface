import c from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar} id={d.id} />);
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.messages} />);

    let newElementMessage = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newElementMessage.current.value;
        let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
        props.dispatch(action);
    }

    return (
        <div className={c.dialogsandMessages}>
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
                        ref={newElementMessage}
                        value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;