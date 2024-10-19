import { connect } from 'react-redux';
import { unfollow, follow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress } from '../../redux/reducer-usersPage.js';
import React, { Component } from 'react';
import Users from './Users/Users.jsx';
import Preloader from '../../assets/Preloader.jsx';
import { usersAPI } from '../../api/api.js';

class UsersAPIContainer extends Component {
    componentDidMount() {
        this.loadUsers(this.props.currentPage); // Первая загрузка
    }

    loadUsers = (pageNumber) => {
        const scrollPosition = window.scrollY;
        this.props.toggleIsFetching(true); // Показать прелоадер

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items); // Добавляем новых пользователей
            this.props.toggleIsFetching(false); // Скрыть прелоадер
            window.scroll(0, scrollPosition); // Возвращаем пользователя на то место, где он нажал кнопку
        });
    }

    loadMoreUsers = () => {
        const nextPage = this.props.currentPage + 1;
        this.props.setCurrentPage(nextPage); // Сначала обновляем текующую страницу
        this.loadUsers(nextPage); // Затем загружаем данные для следующей страницы   
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
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
});

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersAPIContainer);

export default UsersContainer;