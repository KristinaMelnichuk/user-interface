import './Profile.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <div className='commonProfile'>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;