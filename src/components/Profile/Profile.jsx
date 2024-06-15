import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import FriendsList from './FriendsList/FriendsList.jsx';

const Profile = (props) => {
  return (
    <div className={styles.commonProfile}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
      <FriendsList 
        friends={props.profilePage.friendsList} />
    </div>
  )
}

export default Profile;