import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialogItem}>
            <div className={styles.dialogElementName}>
                <NavLink to={path}>{props.sender}</NavLink>
            </div>
            <div className={styles.dialogElementImage}>
                <img src={props.avatar}></img>
            </div>
        </div>
    )
}

export default DialogItem;