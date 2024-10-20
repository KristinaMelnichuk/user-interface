const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [], // массив userId, для которых выполняется подписка/отписка
};

const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: // Обработка действия FOLLOW (подписка на пользователя)
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            };
        case UNFOLLOW:  // Обработка действия UNFOLLOW (отписка от пользователя)
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            };
        case SET_USERS: // Объединяем существующих пользователей с новыми и фильтруем дубликаты по id
            const uniqueUsers = [...state.users, ...action.users].filter((user, index, self) =>
                index === self.findIndex((u) => u.id === user.id) // Оставляем только уникальных по id
            );
            return { // Возвращаем новое состояние с уникальными пользователями
                ...state, // сохраняем предыдущее состояние
                users: uniqueUsers // обновляем список пользователей без дубликатов
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] // Добавляем userId при старте запроса
                    : state.followingInProgress.filter(id => id !== action.userId) // Убираем userId по завершению
            };
        default:
            return state;
    }
};

// action creators
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

export default reducerUsersPage;