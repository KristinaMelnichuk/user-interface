import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reduceMessagesPage from "./reducer-messagesPage";
import reduceProfilePage from "./reducer-profilePage";

const reducers = combineReducers({
    profilePage: reduceProfilePage,
    messagesPage: reduceMessagesPage,
});

const store = configureStore({
    reducer: reducers
});

export default store;