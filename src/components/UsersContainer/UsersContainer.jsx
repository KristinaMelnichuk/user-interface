import { connect } from 'react-redux';
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/reducer-usersPage.js';
import React, { Component } from 'react';
import axios from 'axios';
import Users from './Users/Users.jsx';
import preloaderSvg from '../../assets/image/preloaderSvg.gif';

class UsersAPIContainer extends Component {
    loadUsers = (pageNumber) => {
        const scrollPosition = window.scrollY;

        this.props.toggleIsFetching(true); // Показать прелоадер

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items); // Добавляем новых пользователей
                this.props.toggleIsFetching(false); // Скрыть прелоадер
                this.props.setCurrentPage(pageNumber + 1); // Увеличиваем текущую страницу

                window.scroll(0, scrollPosition); // Возвращаем пользователя на то место, где он нажал кнопку
            });
    }

    componentDidMount() {
        this.loadUsers(this.props.currentPage); // Загружаем пользователей при первой загрузке страницы
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <img src={preloaderSvg} alt='loading...' />
                ) : (
                    <Users
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        loadMoreUsers={() => this.loadUsers(this.props.currentPage)} // Передаем функцию загрузки новых пользователей
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;