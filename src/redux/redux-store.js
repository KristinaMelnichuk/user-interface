import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerMessagesPage from "./reducer-messagesPage";
import reducerProfilePage from "./reducer-profilePage";
import reducerFriendPage from "./reducer-friendPage";

const reducers = combineReducers({
    profilePage: reducerProfilePage,
    messagesPage: reducerMessagesPage,
    friendPage: reducerFriendPage,
});

const store = configureStore({
    reducer: reducers,
});

export default store;