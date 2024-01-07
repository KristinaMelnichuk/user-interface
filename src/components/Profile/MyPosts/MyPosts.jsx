import c from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi", likes: "15" },
    { id: 2, message: "It's my first post", likes: "20" },
  ]

  let postsElements =
    posts.map(p => <Post message={p.message} likes={p.likes} />);

  return (
    <div className={c.mypostsgrid}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;