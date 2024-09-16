const ADD_USERS = 'ADD-USERS';
const DELETED_USERS = 'DELETED-USERS';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
};

const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, buttonUsers: false }
                    }
                    return users;
                })
            };
        case DELETED_USERS:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, buttonUsers: true }
                    }
                    return users;
                })
            };
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }
}

export const addUsersAC = (userId) => ({ type: ADD_USERS, userId });

export const deletedUsersAC = (userId) => ({ type: DELETED_USERS, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default reducerUsersPage;