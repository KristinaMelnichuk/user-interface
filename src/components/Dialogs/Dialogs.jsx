import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={c.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Alyona" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Nikita" }
    ]
   
    let messagesData = [
        { id: 1, messages: "Привет, будешь играть в лигу? =)" },
        { id: 2, messages: "Приветик!" },
        { id: 3, messages: "Как дела??" },
        { id: 4, messages: "Хай :3" }
    ]
    
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={c.messages}>
                <Message message={messagesData[0].messages} />
                <Message message={messagesData[1].messages} />
                <Message message={messagesData[2].messages} />
                <Message message={messagesData[3].messages} />
            </div>
        </div>
    )
}

const Message = (props) => {
    return (<div className={c.dialog}>{props.message}</div>)
}

export default Dialogs;