import React, { Component } from 'react';
import axios from 'axios';
import FriendsDisplay from './FriendsDisplay/FriendsDisplay';

class FriendsList extends Component {
    componentDidMount() {
        this.loadFriends();
    }

    loadFriends = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "your-api-key-here"
            }
        })
            .then(response => {
                this.props.setFriends(response.data.items);
            })
            .catch(error => {
                console.error("Ошибка при загрузке друзей:", error);
            });
    }

    render() {
        return (
            <div>
                <FriendsDisplay friendsList={this.props.friendsList} />
            </div>
        );
    }
}

export default FriendsList;
