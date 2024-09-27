const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const RESET_USERS = 'RESET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
};

const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: // Обработка действия FOLLOW (подписка на пользователя)
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, buttonUsers: false };
                    }
                    return user;
                })
            };

        case UNFOLLOW:  // Обработка действия UNFOLLOW (отписка от пользователя)
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
            if (state.currentPage === 1) {  // Если текущая страница первая, перезаписываем пользователей
                return { ...state, users: action.users }; // Перезаписываем пользователей
            } else {
                return { ...state, users: [...state.users, ...action.users] }; // Добавляем к существующим
            }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };


        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        default: return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const resetUsersAC = () => ({ type: RESET_USERS });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default reducerUsersPage;