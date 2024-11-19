import { connect } from 'react-redux';
import { getUsers, loadMoreUsers, follow, unfollow } from '../../redux/reducer-usersPage.js';
import React, { Component } from 'react';
import Users from './Users/Users.jsx';
import Preloader from '../../assets/Preloader.jsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';

// Главный контейнер для пользователей
class UsersAPIContainer extends Component {
    componentDidMount() {
        // Загружаем первую страницу пользователей
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    loadUsers = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize); // Загрузка пользователей для текущей страницы
    };

    render() {
        const {isFetching, users, follow, unfollow, loadMoreUsers, followingInProgress} = this.props;

         // Отображаем прелоадер, пока идет загрузка, иначе - список пользователей
        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        loadMoreUsers={loadMoreUsers}
                        followingInProgress={followingInProgress}
                    />
                )}
            </>
        );
    }
}

const AuthRedirectComponent = withAuthRedirect(UsersAPIContainer);

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
});

// Подключение к Redux
const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    loadMoreUsers,
})(AuthRedirectComponent);

export default UsersContainer;