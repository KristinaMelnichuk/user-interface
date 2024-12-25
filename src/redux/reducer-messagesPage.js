const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

// action creators
export const updateNewMessageBody = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body });
export const addMessage = () => ({ type: SEND_MESSAGE });

const initialState = {
    dialogs: [{ id: 1, sender: "", avatar: '' }],
    messages: [],
    newMessageBody: '',
};

const reducerMessagesPage = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messages.length + 1,
                messages: state.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: state.newMessageBody,
            };
        };
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body,
            };
        };
        default:
            return state;
    }
};

export default reducerMessagesPage;