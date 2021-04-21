import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  let profileState = props.state.profilePage;
  let dialogsState = props.state.dialogsPage;

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="content-wrapper">
          <Navbar />
          <div className="main-content">
            <Route path='/profile' render={ () => <Profile state={profileState} dispatch={props.dispatch} /> } />
            <Route path='/dialogs' render={ () => <Dialogs state={dialogsState} dispatch={props.dispatch}/> } />

            <Route path='/news' render={ () => <News /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/settings' render={ () => <Settings /> } />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;