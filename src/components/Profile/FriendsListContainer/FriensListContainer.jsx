import FriendsList from './FriendsList/FriendsList.jsx';
import { connect } from 'react-redux';
import { setFriendsAC } from '../../../redux/reducer-profilePage.js';

const mapStateToProps = (state) => ({
    friendsList: state.profilePage.friendsList,
});

const mapDispatchToProps = (dispatch) => ({
    setFriends: (friends) => dispatch(setFriendsAC(friends)),
});

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);
export default FriendsListContainer;