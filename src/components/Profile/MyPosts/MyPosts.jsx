import c from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={c.posts}>
        <Post message="Hi" likes="15" />
        <Post message="It's my first post" likes="20" />
      </div>
    </div>
  );
}
export default MyPosts;