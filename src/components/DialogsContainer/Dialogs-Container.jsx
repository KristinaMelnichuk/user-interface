import { addMessage, updateNewMessageBody } from '../../redux/reducer-messagesPage.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs/Dialogs.jsx';

const mapStateToProps = (state) => ({
    newMessageBody: state.messagesPage.newMessageBody,
    dialogItems: state.messagesPage.dialogs,
    messageItems: state.messagesPage.messages,
});

const DialogsContainer = compose(
    connect(mapStateToProps, {
        addMessage,
        updateNewMessageBody
    }),
    withAuthRedirect,
)(Dialogs);

export default DialogsContainer;