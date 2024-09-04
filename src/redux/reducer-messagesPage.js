const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
    dialogs: [
        { id: 1, sender: "Alina", avatar: "https://i.pinimg.com/564x/11/6e/e6/116ee69b9f279edfa4b6f485aa21e0b6.jpg" },
        { id: 2, sender: "Alyona", avatar: "https://i.pinimg.com/564x/10/43/d4/1043d41bab7bf513c3ebe45b084ec198.jpg" },
        { id: 3, sender: "Sveta", avatar: "https://i.pinimg.com/564x/5a/18/83/5a1883f5a2f31410de6474ab54583447.jpg" },
        { id: 4, sender: "Nina", avatar: "https://i.pinimg.com/564x/e1/32/46/e13246a40351a3de7e7ff886f4e6b894.jpg" },
    ],
    messages: [
        { id: 1, messages: "Привет, будешь играть в лигу? =)" },
        { id: 2, messages: "Приветик!" },
        { id: 3, messages: "Как дела??" },
        { id: 4, messages: "Хай :3" },
    ],
    newMessageBody: ''
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
                newMessageBody: ''
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newBody
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreate = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyActionCreate = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newBody: body
})


export default reducerMessagesPage;