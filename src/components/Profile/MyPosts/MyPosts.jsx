import c from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi", likes: "15" },
    { id: 2, message: "It's my first post", likes: "20" },
  ]

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
        <Post message={postData[0].message} likes={postData[0].likes} />
        <Post message={postData[1].message} likes={postData[1].likes} />
      </div>
    </div>
  );
}

export default MyPosts;