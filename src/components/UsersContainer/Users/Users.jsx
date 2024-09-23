import React from 'react';
import UsersInfo from './UsersInfo/UsersInfo';
import Pagination from './Pagination/Pagination';

const Users = (props) => {
    const usersList = props.users.map(u => (
        <UsersInfo
            name={u.name}
            photos={u.photos}
            id={u.id}
            key={u.id}
            buttonUsers={u.buttonUsers}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    ));

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    return (
        <div>
            <div>
                <Pagination
                    totalPages={pagesCount}
                    currentPage={props.currentPage}
                    onPageChange={props.onPageChange}
                />
            </div>
            <div>
                {usersList}
            </div>
        </div>
    );

}
export default Users;