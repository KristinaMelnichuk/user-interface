import { connect } from 'react-redux';
import { setFriends } from '../../../../redux/reducer-profilePage.js';
import React, { Component } from 'react';
import FriendsDisplay from './FriendsDisplay/FriendsDisplay';
import { fetchLoadFriends } from '../../../../redux/reducer-profilePage.js';
class FriendsListAPI extends Component {
    componentDidMount() {
        this.loadFriends();
    };

    loadFriends = () => {
        this.props.fetchLoadFriends(this.props.pageSize)
    }

    render() {
        return <FriendsDisplay friendsList={this.props.friendsList} />
    }
}

const mapStateToProps = (state) => ({
    friendsList: state.profilePage.friendsList,
});

const FriendsListContainer = connect(mapStateToProps, {
    setFriends,
    fetchLoadFriends
})(FriendsListAPI);

export default FriendsListContainer;