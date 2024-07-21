import { addPostActionCreate, updateNewPostTextActionCreate } from '../../../redux/reducer-profilePage.js';
import MyPosts from './MyPosts.jsx';
import { connect } from "react-redux";

const mapStateToProps = (state) => { // Чтобы передать данные из состояния в компонент
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

const mapDispatchToProps = (dispatch) => { //чтобы передать функции для dispatch действий в компонент
  return {
    onAddPost: () => {
      dispatch(addPostActionCreate());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreate(text));
    },
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;