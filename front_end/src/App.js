import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ElderlyPortal from './components/ElderlyPortal/ElderlyPortal';
import LoginButton from './components/Authentication/Login/LoginButton';
import LogoutButton from './components/Authentication/Logout/LogoutButton';
import Profile from './components/Authentication/Profile/Profile';
import './components/Authentication/Login/LoginButton.css'
import './components/Authentication/Logout/LogoutButton.css'
import Curator from './components/Curator/Curator';
import TrustedCircle from './components/TrustedCircle/TrustedCircle';
import Chat from './components/Chat/Chat';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <div style={{float:'left'}}>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">InformaTV</h1>
          </div>
          <div style={{marginTop:20}}>
            <LoginButton/>
            <LogoutButton/>
          </div>
          {/*This is the links that are shown on the profile page*/}
          <div style={{marginTop:50}}>
            <Link to="/profile" style={{padding:20}}>Profile</Link>
            <Link to="/Chat" style={{padding:20}}>Chat</Link>
          </div>
        </header>
        {/* This switch path defines the different URL paths that allow the react app to transition between differnt links*/}
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/ElderlyPortal">
            <ElderlyPortal />
          </Route>
          <Route path="/Curator">
            <Curator />
          </Route>
          <Route path="/TrustedCircle">
            <TrustedCircle />
          </Route>
          <Route path="/Chat">
            <Chat />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
