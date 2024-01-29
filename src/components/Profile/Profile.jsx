import './Profile.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import { addPost } from '../../redux/state.js';

const Profile = (props) => {
  console.log('props', props)
  return (
    <div className='commonProfile'>
      <ProfileInfo />
      <MyPosts posts ={props.state.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;