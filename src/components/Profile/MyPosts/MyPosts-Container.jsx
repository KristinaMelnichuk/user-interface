import { addPost, updateNewPostText } from '../../../redux/reducer-profilePage.js';
import MyPosts from './MyPosts.jsx';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;