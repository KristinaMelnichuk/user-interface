import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          addPost={store.addPost}
          updateNewPostText={store.updateNewPostText}
          
          addMessage={store.addMessage}
          updateNewMessageText={store.updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}

reportWebVitals();
rerenderEntireTree (store.getState());
store.subscribe(rerenderEntireTree);