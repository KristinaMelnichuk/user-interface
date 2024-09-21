import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPosts-Container.jsx';
import FriendsListContainer from './FriendsListContainer/FriensListContainer.jsx';

const Profile = () => {
  return (
    <div className={styles.commonProfile}>
      <ProfileInfo />
      <MyPostsContainer />
      <FriendsListContainer />
    </div>
  )
}

export default Profile;