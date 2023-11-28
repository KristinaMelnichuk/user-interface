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
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Alyona" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Nikita" id="4" />
            </div>
            <div className={c.messages}>
                <Message message="Привет, будешь играть в лигу? =)" />
                <Message message="Приветик!" />
                <Message message="Как дела??" />
                <Message message="Хай :3" />
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.dialog}>{props.message}</div>)
}

export default Dialogs;
