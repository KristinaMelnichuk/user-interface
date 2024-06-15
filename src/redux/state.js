const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
  _state: {
    profilePage: {
      friendsList: [
        { id: 1, name: "Alina", avatar: "https://i.pinimg.com/564x/11/6e/e6/116ee69b9f279edfa4b6f485aa21e0b6.jpg" },
        { id: 2, name: "Alyona", avatar: "https://i.pinimg.com/564x/10/43/d4/1043d41bab7bf513c3ebe45b084ec198.jpg" },
        { id: 3, name: "Sveta", avatar: "https://i.pinimg.com/564x/5a/18/83/5a1883f5a2f31410de6474ab54583447.jpg" },
        { id: 4, name: "Nina", avatar: "https://i.pinimg.com/564x/e1/32/46/e13246a40351a3de7e7ff886f4e6b894.jpg" },
        { id: 5, name: "Elena", avatar: "https://i.pinimg.com/564x/17/5a/8d/175a8d3d6a78723a34aad626e5a02a67.jpg" },
        { id: 6, name: "Kris", avatar: "https://i.pinimg.com/564x/cc/1e/d0/cc1ed0e4b978a54f13670bbfd6d0c9e8.jpg" },
      ],
      posts: [
        { id: 1, message: "Hi", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: ''
    },

    messagesPage: {
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
      newMessageText: ''
    },

  },
  _callSubscriber() { },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: 5,
        messages: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export const addMessageActionCreate = () => ({ type: ADD_MESSAGE })

export const onMessageChangeActionCreate = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})

export const addPostActionCreate = () => ({ type: ADD_POST });

export const onPostChangeActionCreate = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export default store;
window.Storage = store;