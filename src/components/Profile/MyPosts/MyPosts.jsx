import c from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} key={p.id} />);
  
  const newElementPost = React.createRef();

  const handleAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newElementPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={c.mypostsgrid}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newElementPost}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={handleAddPost }>Опубликовать</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;