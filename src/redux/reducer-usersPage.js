const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
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
        // Обработка действия FOLLOW (подписка на пользователя)
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, buttonUsers: false };
                    }
                    return user;
                })
            };

        // Обработка действия UNFOLLOW (отписка от пользователя)
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, buttonUsers: true };
                    }
                    return user;
                })
            };

        // Обработка действия SET_USERS (установка списка пользователей)    
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        // Обработка действия SET_CURRENT_PAGE (установка текущей страницы)   
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        // Обработка действия TOTAL_USERS_COUNT (установка общего количества пользователей)    
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: TOTAL_USERS_COUNT, count: totalUsersCount });

export default reducerUsersPage;