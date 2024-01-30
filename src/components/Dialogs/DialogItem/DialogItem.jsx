import c from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={c.dialog}>
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