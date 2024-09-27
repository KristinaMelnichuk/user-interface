import { addMessageActionCreate, updateNewMessageBodyActionCreate } from '../../redux/reducer-messagesPage.js';
import Dialogs from './Dialogs/Dialogs.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ // Чтобы передать данные из состояния в компонент
    newMessageBody: state.messagesPage.newMessageBody,
    dialogItems: state.messagesPage.dialogs,
    messageItems: state.messagesPage.messages,
});

const mapDispatchToProps = (dispatch) => ({ //чтобы передать функции для dispatch действий в компонент
    onAddMessage: () => dispatch(addMessageActionCreate()),
    onUpdateMessageBody: (body) => dispatch(updateNewMessageBodyActionCreate(body)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;