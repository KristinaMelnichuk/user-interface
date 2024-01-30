import c from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={c.dialogMessage}>
            {props.message}
        </div>
    )
}

export default Message;