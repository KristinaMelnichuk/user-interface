import c from './Post.module.css';

const Post = (props) => {

  return (
    <div className={c.item}>
      <img src='https://pm1.aminoapps.com/7807/f44bc1a03d1708292af34330734b77fbce947c54r1-720-720v2_uhq.jpg' />
     {props.message}
      <div>
        <span>like {props.likes}</span> 
      </div>
    </div>
  );
}
export default Post;