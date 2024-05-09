import './Profile.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Groups from './Groups/Groups.jsx';

const Profile = (props) => {
  return (
    <div className='commonProfile'>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/> 
     <Groups />
    </div>
  )
}

export default Profile;