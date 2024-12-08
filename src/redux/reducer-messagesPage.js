const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const initialState = {
    dialogs: [{ id: 1, sender: "Alina", avatar: 'https://i.pinimg.com/564x/11/6e/e6/116ee69b9f279edfa4b6f485aa21e0b6.jpg' }],
    messages: [],
}

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
            };
        }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newBody
            };

        default:
            return state;
    }
}

export const addMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: body });

export default reducerMessagesPage;