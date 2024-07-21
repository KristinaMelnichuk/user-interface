import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider value={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

reportWebVitals();
rerenderEntireTree();
store.subscribe(() => { rerenderEntireTree() });