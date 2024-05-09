import c from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";
import React from "react";
import { NavLink } from "react-router-dom";

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
            <div className={c.dialogs}>
                <div className={c.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={c.messages}>
                    {messagesElements}
                    <div>
                        <textarea
                            onChange={onMessageChange}
                            ref={newElementMessage}
                            value={props.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;