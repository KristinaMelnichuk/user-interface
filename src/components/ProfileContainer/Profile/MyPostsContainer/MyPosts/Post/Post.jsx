import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src= '' />
      {props.message}
      <div>
        <span>Мне нравится {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;