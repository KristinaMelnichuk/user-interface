import { connect } from 'react-redux';
import { unfollow, follow, setUsers, setCurrentPage, toggleIsFetching, resetUsers } from '../../redux/reducer-usersPage.js';
import React, { Component } from 'react';
import axios from 'axios';
import Users from './Users/Users.jsx';
import Preloader from '../../assets/Preloader.jsx';

class UsersAPIContainer extends Component {
    loadUsers = (pageNumber) => {
        const scrollPosition = window.scrollY;

        this.props.toggleIsFetching(true); // Показать прелоадер

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items); // Добавляем новых пользователей
                this.props.toggleIsFetching(false); // Скрыть прелоадер
                window.scroll(0, scrollPosition); // Возвращаем пользователя на то место, где он нажал кнопку
            });
    }

    componentDidMount() {
        this.loadUsers(this.props.currentPage); // Загружаем пользователей при первой загрузке страницы
    }

    loadMoreUsers = () => {
        const nextPage = this.props.currentPage + 1;
        this.loadUsers(nextPage);
        this.props.setCurrentPage(nextPage);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        loadMoreUsers={this.loadMoreUsers} // Передаем функцию загрузки новых пользователей
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    resetUsers,
    setCurrentPage,
    toggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;