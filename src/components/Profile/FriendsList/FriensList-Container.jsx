import FriendsList from "./FriendsList"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendsList: state.profilePage.friendsList,
    }
};

const FriendsListContainer = connect(mapStateToProps)(FriendsList);
export default FriendsListContainer;