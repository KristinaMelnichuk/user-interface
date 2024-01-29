import c from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id ;

    return (
        <div className={c.dialog}>
        <NavLink to={path}>{props.name} <img src={props.avatar}></img></NavLink>
        </div>
    )}
    
export default DialogItem;