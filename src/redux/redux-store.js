import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerMessagesPage from './reducer-messagesPage';
import reducerProfilePage from './reducer-profilePage';
import reducerUsersPage from './reducer-usersPage';

const reducers = combineReducers({
    profilePage: reducerProfilePage,
    messagesPage: reducerMessagesPage,
    usersPage: reducerUsersPage,
});

const store = configureStore({
    reducer: reducers,
});

export default store;