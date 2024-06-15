import c from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';
import { addPostActionCreate, onPostChangeActionCreate } from '../../../redux/state.js';


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

  let newElementPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreate());
  };

  let onPostChange = () => {
    let text = newElementPost.current.value;
    let action = onPostChangeActionCreate(text);
    props.dispatch(action);
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
          <button onClick={addPost}>Опубликовать</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;