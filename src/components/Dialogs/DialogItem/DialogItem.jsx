import c from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={c.dialogItem}>
            <div className={c.dialogElementName}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
            <div className={c.dialogElementImage}>
                <img src={props.avatar}></img>
            </div>
        </div>
    )
}

export default DialogItem;