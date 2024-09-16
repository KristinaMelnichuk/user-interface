import React, { Component } from 'react';
import UsersInfo from './UsersInfo/UsersInfo';
import axios from 'axios';
import Pagination from './Pagination/Pagination.jsx';

class Users extends Component {
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
        const users = this.props.users.map(u => (
            <UsersInfo
                name={u.name}
                photos={u.photos}
                id={u.id}
                key={u.id}
                buttonUsers={u.buttonUsers}
                addUsers={this.props.addUsers}
                deletedUsers={this.props.deletedUsers}
            />
        ));

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        return (
            <div>
                <div>
                    <Pagination
                        pagesCount={pagesCount}
                        currentPage={this.props.currentPage}
                        onPageChange={this.handlePageChange} // Передаем функцию для изменения страницы
                    />
                </div>
                <div>
                    {users}
                </div>
            </div>
        );
    }
}

export default Users;
