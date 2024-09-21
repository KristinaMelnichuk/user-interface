import React, { Component } from 'react';
import axios from 'axios';
import FriendsDisplay from "./FriendsDisplay/FriendsDisplay.jsx";

class FriendsList extends Component {
    componentDidMount() {
        this.loadFriends();
    }

    loadFriends = () => {
        // Здесь исправляем запрос
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`, {
            withCredentials: true, // если нужно передавать куки
            headers: {
                "API-KEY": "your-api-key-here" // если требуется API ключ
            }
        })
        .then(response => {
            this.props.setFriends(response.data.items); // Установка списка друзей через props
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
