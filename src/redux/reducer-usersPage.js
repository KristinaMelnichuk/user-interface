const ADD_USERS = 'ADD-USERS';
const DELETED_USERS = 'DELETED-USERS';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
};

const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, buttonUsers: false };
                    }
                    return user;
                })
            };
        case DELETED_USERS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, buttonUsers: true };
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users // Обновляем пользователей
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        default:
            return state;
    }
};

export const addUsersAC = (userId) => ({ type: ADD_USERS, userId });
export const deletedUsersAC = (userId) => ({ type: DELETED_USERS, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: TOTAL_USERS_COUNT, count: totalUsersCount });

export default reducerUsersPage;