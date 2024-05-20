const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        { id: 1, sender: "Alina", avatar: "https://i.pinimg.com/474x/0b/cf/be/0bcfbeb98d8d4390a03253879237b2a2.jpg" },
        { id: 2, sender: "Alyona", avatar: "https://i.pinimg.com/474x/7e/b6/51/7eb651e3a613a07e7dea9cd728292557.jpg" },
        { id: 3, sender: "Sveta", avatar: "https://i.pinimg.com/474x/1a/6f/1c/1a6f1ce3112b4d97e4a381b99783ea9d.jpg" },
        { id: 4, sender: "Nina", avatar: "https://i.pinimg.com/474x/92/65/fd/9265fde630bb20bd529b9257c6728654.jpg" }
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

  _addMessage() {
    const newMessage = {
      id: 5,
      messages: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  _addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) { 
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText)
    } else if (action.type === 'ADD-MESSAGE') {
      this._addMessage();
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._updateNewMessageText(action.newText);
    }
  }
};

export default store;
window.Storage = store;
