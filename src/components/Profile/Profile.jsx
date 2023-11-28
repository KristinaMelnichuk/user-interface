import MyPosts from './MyPosts/MyPosts.jsx';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profilegrid'>
      <div>
        <img src="https://interier-foto.ru/wp-content/uploads/2014/11/gora-beluha6137.jpg" />
      </div>
      <div className='profiletxt'>
        <p>ava + description</p>
        <MyPosts />
      </div>
    </div>
  );
}
export default Profile;