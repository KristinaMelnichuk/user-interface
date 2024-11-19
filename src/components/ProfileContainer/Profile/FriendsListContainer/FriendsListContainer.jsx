import { connect } from 'react-redux';
import { setFriends } from '../../../../redux/reducer-profilePage.js';
import React, { Component } from 'react';
import axios from 'axios';
import FriendsDisplay from './FriendsDisplay/FriendsDisplay';

const configAPI = {
    withCredentials: true,
    headers: {
        "API-KEY": "your-api-key-here"
    }
}

class FriendsListAPI extends Component {
    componentDidMount() {
        this.loadFriends();
    };

    loadFriends = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`, { configAPI })
            .then(response => {
                this.props.setFriends(response.data.items)
            })
            .catch(error => {
                console.error("Ошибка при загрузке друзей:", error);
            });
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
})(FriendsListAPI);

export default FriendsListContainer;