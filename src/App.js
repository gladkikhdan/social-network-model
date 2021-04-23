import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  let dialogsState = props.state.dialogsPage;

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="content-wrapper">
          <Navbar />
          <div className="main-content">
            <Route path='/profile' render={ () => <Profile store={props.store} /> } />
            <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} /> } />

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