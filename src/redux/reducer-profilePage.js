const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const SET_FRIENDS = 'SET_FRIENDS'; // Новый экшен для установки списка друзей
const SET_USERS = 'SET_USERS';

const SET_USER_PROFILE = 'SET_USER_PROFILE';


const initialState = {
    users: [], // Список пользователей
    friendsList: [], // Список друзей
    profile: null,

    posts: [],
    newPostText: '',
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setUsers = (users) => ({ type: SET_USERS, users });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default reducerProfilePage;