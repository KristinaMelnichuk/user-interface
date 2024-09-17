import { connect } from 'react-redux';
import UsersList from './UsersList/UsersList.jsx';
import { deletedUsersAC, addUsersAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/reducer-usersPage.js';

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
        addUsers: (userId) => {
            dispatch(addUsersAC(userId));
        },

        deletedUsers: (userId) => {
            dispatch(deletedUsersAC(userId));
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UsersContainer;