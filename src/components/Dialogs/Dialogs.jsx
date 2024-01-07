// import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogItem.jsx";

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Alyona" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Nikita" }
    ]

    let messages = [
        { id: 1, messages: "Привет, будешь играть в лигу? =)" },
        { id: 2, messages: "Приветик!" },
        { id: 3, messages: "Как дела??" },
        { id: 4, messages: "Хай :3" },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    
    let messagesElements = messages.map(m => <Message message={m.messages} />);

    return (
        <div className={c.dialogsandMessages}>
            <div className={c.dialogs}>
                <div className={c.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={c.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>)
}

export default Dialogs;