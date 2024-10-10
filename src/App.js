import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/ProfileContainer/ProfileContainer.jsx';
import DialogsContainer from './components/DialogsContainer/Dialogs-Container.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/UsersContainer/UsersContainer.jsx';
import Photo from './components/Photo/Photo.jsx';
import Video from './components/Video/Video.jsx';
import Services from './components/Service/Services.jsx';
import Calls from './components/Calls/Calls.jsx';
import Communities from './components/Communities/Communities.jsx';
import HeaderContainer from './components/Header/HeaderContainer/HeaderContainer.jsx';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<Navigate to='/profile' />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/calls' element={<Calls />} />
          <Route path='/friends' element={<UsersContainer />} />
          <Route path='/Communities' element={<Communities />} />
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