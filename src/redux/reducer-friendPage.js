const ADD_FRIEND = 'ADD-FRIEND';
const DELETED_FRIEND = 'DELETED-FRIEND';
const SET_USERS = 'SET-USERS';

const initialState = {
    friendInfo: [],
};

const reducerFriendPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friendInfo: state.friendInfo.map(friendInfo => {
                    if (friendInfo.id === action.userId) {
                        return { ...friendInfo, buttonFriend: false }
                    }
                    return friendInfo;
                })
            };
        case DELETED_FRIEND:
            return {
                ...state,
                friendInfo: state.friendInfo.map(friendInfo => {
                    if (friendInfo.id === action.userId) {
                        return { ...friendInfo, buttonFriend: true }
                    }
                    return friendInfo;
                })
            };
        case SET_USERS: {
            return { ...state, friendInfo: [...state.friendInfo, ...action.friendInfo] }
        }

        default:
            return state;
    }
}

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });

export const deletedFriendAC = (userId) => ({ type: DELETED_FRIEND, userId });

export const setUsersAC = (friendInfo) => ({ type: SET_USERS, friendInfo });

export default reducerFriendPage;