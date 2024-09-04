const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    friendsList: [
        { id: 1, name: "Alina", avatar: "https://i.pinimg.com/564x/11/6e/e6/116ee69b9f279edfa4b6f485aa21e0b6.jpg" },
        { id: 2, name: "Alyona", avatar: "https://i.pinimg.com/564x/10/43/d4/1043d41bab7bf513c3ebe45b084ec198.jpg" },
        { id: 3, name: "Sveta", avatar: "https://i.pinimg.com/564x/5a/18/83/5a1883f5a2f31410de6474ab54583447.jpg" },
        { id: 4, name: "Nina", avatar: "https://i.pinimg.com/564x/e1/32/46/e13246a40351a3de7e7ff886f4e6b894.jpg" },
        { id: 5, name: "Elena", avatar: "https://i.pinimg.com/564x/17/5a/8d/175a8d3d6a78723a34aad626e5a02a67.jpg" },
        { id: 6, name: "Kris", avatar: "https://i.pinimg.com/564x/cc/1e/d0/cc1ed0e4b978a54f13670bbfd6d0c9e8.jpg" },
    ],
    posts: [
        { id: 1, message: "Hi", likes: 15 },
    ],
    newPostText: ''
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
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreate = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default reducerProfilePage;