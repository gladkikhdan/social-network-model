import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className="content-wrapper">
        <Navbar />
        <div className="main-content"> { /*profile, dialogs, news, music */}
          {/* <Profile /> */}
          <Dialogs />
        </div>        
      </div>
    </div>
  );
}

export default App;