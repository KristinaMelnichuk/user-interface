
import { addMessageActionCreate, updateNewMessageBodyActionCreate } from "../../redux/reducer-messagesPage.js";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => { // Чтобы передать данные из состояния в компонент
    return {
        newMessageBody: state.messagesPage.newMessageBody,
        dialogItems: state.messagesPage.dialogs,
        messageItems: state.messagesPage.messages,
    }
}

const mapDispatchToProps = (dispatch) => { //чтобы передать функции для dispatch действий в компонент
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreate())
        },
        onUpdateMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreate(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;