import Users from './Users.jsx';
import { connect } from 'react-redux';
import { deletedUsersAC, addUsersAC, setUsersAC } from '../../redux/reducer-usersPage.js';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;