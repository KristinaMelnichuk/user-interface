import Friends from './Friends';
import { connect } from 'react-redux';
import { deletedFriendAC, addFriendAC, setUsersAC } from '../../redux/reducer-friendPage.js';

const mapStateToProps = (state) => {
    return {
        friendInfo: state.friendPage.friendInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(addFriendAC(userId));
        },

        deletedFriend: (userId) => {
            dispatch(deletedFriendAC(userId));
        },

        setUsers: (friendInfo) => {
            dispatch(setUsersAC(friendInfo));
        },
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;