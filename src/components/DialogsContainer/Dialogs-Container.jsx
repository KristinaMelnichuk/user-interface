import { addMessage, updateNewMessageBody } from '../../redux/reducer-messagesPage.js';
import AuthRedirectComponent from './Dialogs/Dialogs.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    newMessageBody: state.messagesPage.newMessageBody,
    dialogItems: state.messagesPage.dialogs,
    messageItems: state.messagesPage.messages,
});

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessageBody,
})(AuthRedirectComponent);

export default DialogsContainer;