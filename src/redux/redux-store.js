import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerMessagesPage from './reducer-messagesPage';
import reducerProfilePage from './reducer-profilePage';
import reducerUsersPage from './reducer-usersPage';
import authReducer from './reducer-auth';

const reducers = combineReducers({
    profilePage: reducerProfilePage,
    messagesPage: reducerMessagesPage,
    usersPage: reducerUsersPage,
    auth: authReducer,
});

const store = configureStore({
    reducer: reducers,
});

export default store;