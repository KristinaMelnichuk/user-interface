import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/DialogsContainer/Dialogs-Container.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/UsersContainer/UsersContainer.jsx';
import Photo from './components/Photo/Photo.jsx';
import Video from './components/Video/Video.jsx';
import Services from './components/Service/Services.jsx';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<Navigate to='/profile' />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/news' element={<News />} />
          <Route path='/friends' element={<UsersContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/music' element={<Music />} />
          <Route path='/video' element={<Video />} />
          <Route path='/services' element={<Services />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
