import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';
import PostSubmitForm from './Post/PostSubmitForm.jsx';

const MyPosts = (props) => {
  const postsElements = props.posts.map(p =>
    <Post
      message={p.message}
      likes={p.likes}
      key={p.id}
    />
  );

  return (
    <div className={styles.mypostsgrid}>
      <PostSubmitForm
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;