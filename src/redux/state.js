import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi", likes: "15" },
      { id: 2, message: "It's my first post", likes: "20" },
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Alina", avatar: "https://i.pinimg.com/474x/0b/cf/be/0bcfbeb98d8d4390a03253879237b2a2.jpg" },
      { id: 2, name: "Alyona", avatar: "https://i.pinimg.com/474x/7e/b6/51/7eb651e3a613a07e7dea9cd728292557.jpg" },
      { id: 3, name: "Sveta", avatar: "https://i.pinimg.com/474x/1a/6f/1c/1a6f1ce3112b4d97e4a381b99783ea9d.jpg" },
      { id: 4, name: "Nina", avatar: "https://i.pinimg.com/474x/92/65/fd/9265fde630bb20bd529b9257c6728654.jpg" }
    ],
    messages: [
      { id: 1, messages: "Привет, будешь играть в лигу? =)" },
      { id: 2, messages: "Приветик!" },
      { id: 3, messages: "Как дела??" },
      { id: 4, messages: "Хай :3" },
    ],
  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likes: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;
