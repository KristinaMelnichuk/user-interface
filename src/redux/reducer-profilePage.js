import { api } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_FRIENDS = 'SET_FRIENDS'; // Новый экшен для установки списка друзей
const SET_USERS = 'SET_USERS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

// Action Creators
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

const initialState = {
    users: [], // Список пользователей
    friendsList: [], // Список друзей
    profile: null,
    posts: [],
    newPostText: '',
    status: '',
};

const reducerProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_FRIENDS:
            return {
                ...state,
                friendsList: action.friends
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

// thunk creators
export const fetchUserProfile = (userId) => {
    return (dispatch) => {
        api.profile.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
            .catch(error => {
                console.error("Ошибка загрузки профиля", error);
            });
    }
};

export const fetchLoadFriends = (pageSize) => {
    return (dispatch) => {
        api.friendsList.getUsers(pageSize)
            .then(response => {
                dispatch(setFriends(response.data.items));
            })
            .catch(error => {
                console.error("Ошибка при загрузке друзей:", error);
            });
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        api.profile.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
            .catch(error => {
                console.error("Ошибка при обработке статуса:", error);
            });
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        api.profile.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
            .catch(error => {
                console.error("Ошибка при обновлении статуса:", error);
            });
    }
};

export default reducerProfilePage;