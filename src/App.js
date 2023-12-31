import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper" >
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/' element={<Navigate to='/Profile' />} />
            <Route path='/profile' Component={Profile} />
            <Route path='/dialogs/*' Component={Dialogs} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;