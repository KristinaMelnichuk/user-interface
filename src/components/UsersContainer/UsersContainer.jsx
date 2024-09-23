import { connect } from 'react-redux';
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/reducer-usersPage.js';
import React, { Component } from 'react';
import axios from 'axios';
import Users from './Users/Users.jsx';

class UsersAPIContainer extends Component {
    componentDidMount() {
        // Инициализация страницы и размера страницы
        this.loadUsers(this.props.currentPage || 1);
    }

    loadUsers = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setCurrentPage(pageNumber);
            });
    }

    handlePageChange = (pageNumber) => {
        this.loadUsers(pageNumber);
    }

    render() {
        return <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.handlePageChange}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage || 1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },

        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },

        onPageChange: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;