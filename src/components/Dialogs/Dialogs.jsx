// import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar} id={d.id} />);

    let messagesElements = props.state.messages.map(m => <Message message={m.messages} />);

    let newElementMessage = React.createRef();
    let addMessage = () => {
        let newAddMessage = newElementMessage.current.value;
        alert(newAddMessage)
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
                        <textarea ref={newElementMessage}></textarea>
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