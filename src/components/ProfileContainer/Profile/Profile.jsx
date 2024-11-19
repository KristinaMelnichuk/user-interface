import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPostsContainer/MyPostsContainer.jsx';
import FriendsListContainer from './FriendsListContainer/FriendsListContainer.jsx';

const Profile = (props) => {
  const { profile } = props;
  return (
    <div className={styles.commonProfile}>
      <ProfileInfo profile={profile} />
      <MyPostsContainer profile={profile} />
      <FriendsListContainer />
    </div>
  );
}

export default Profile;