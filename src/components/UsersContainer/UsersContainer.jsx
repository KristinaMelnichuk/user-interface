import { connect } from 'react-redux';
import { getUsers, loadMoreUsers, follow, unfollow } from '../../redux/reducer-usersPage.js';
import React, { Component } from 'react';
import Users from './Users/Users.jsx';
import Preloader from '../../assets/Preloader/Preloader.jsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

// Главный контейнер для пользователей
class UsersAPIContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); // Загружаем первую страницу пользователей
    };
    
    loadUsers = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize); // Загрузка пользователей для текущей страницы
    };

    render() {
        const { isFetching, users, follow, unfollow, loadMoreUsers, followingInProgress } = this.props;
        
        return (
            <div>
                {isFetching ? (
                    <Preloader />  // Отображаем прелоадер, пока идет загрузка, иначе - список пользователей
                ) : (
                    <Users
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        loadMoreUsers={loadMoreUsers}
                        followingInProgress={followingInProgress}
                    />
                )}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
});

const UsersContainer = compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
        loadMoreUsers
    }),
    withAuthRedirect,
)(UsersAPIContainer);

export default UsersContainer;