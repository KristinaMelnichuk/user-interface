import FriendsList from './FriendsList/FriendsList.jsx';
import { connect } from 'react-redux';
import { setFriends } from '../../../redux/reducer-profilePage.js';

const mapStateToProps = (state) => ({
    friendsList: state.profilePage.friendsList,
});

const FriendsListContainer = connect(mapStateToProps, { setFriends })(FriendsList);

export default FriendsListContainer;