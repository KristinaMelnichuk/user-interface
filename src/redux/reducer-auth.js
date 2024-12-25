import { api } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default: return state;
    }
};

// action creators
export const setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

// thunk creators
export const fetchAuthUserData = () => {
    return (dispatch) => {
        api.auth.getAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                };
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error); // Ловим ошибки, если что-то пойдёт не так
            });
    }
}


export default authReducer;