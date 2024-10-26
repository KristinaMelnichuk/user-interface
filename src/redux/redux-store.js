import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerMessagesPage from './reducer-messagesPage';
import reducerProfilePage from './reducer-profilePage';
import reducerUsersPage from './reducer-usersPage';
import authReducer from './reducer-auth';
import { thunk } from 'redux-thunk';

const reducers = combineReducers({
    profilePage: reducerProfilePage,
    messagesPage: reducerMessagesPage,
    usersPage: reducerUsersPage,
    auth: authReducer,
});

const thunkMiddleware = thunk;

const store = configureStore({
    reducer: reducers
}, applyMiddleware(thunkMiddleware));

export default store;