import { addMessage, updateNewMessageBody } from '../../redux/reducer-messagesPage.js';
import Dialogs from './Dialogs/Dialogs.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ // Чтобы передать данные из состояния в компонент
    newMessageBody: state.messagesPage.newMessageBody,
    dialogItems: state.messagesPage.dialogs,
    messageItems: state.messagesPage.messages,
});

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessageBody,
})(Dialogs);

export default DialogsContainer;