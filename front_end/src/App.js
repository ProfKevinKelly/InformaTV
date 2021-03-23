import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import ElderlyPortal from './components/ElderlyPortal/ElderlyPortal';
import LoginButton from './components/Authentication/Login/LoginButton';
import LogoutButton from './components/Authentication/Logout/LogoutButton';
import Profile from './components/Authentication/Profile/Profile';
import './components/Authentication/Login/LoginButton.css'
import './components/Authentication/Logout/LogoutButton.css'
import Curator from './components/Curator/Curator';
import TrustedCircle from './components/TrustedCircle/TrustedCircle';


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
          <div style={{marginTop:50}}>
            <Link to="/profile" style={{padding:20}}>Profile</Link>
            <Link to="/ElderlyPortal" style={{padding:20}}>Elderly Portal</Link>
            <Link to="/Curator" style={{padding:20}}>Curator</Link>
            <Link to="/TrustedCircle" style={{padding:20}}>Trusted Circle</Link>
          </div>
        </header>
        <div>
        </div>
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
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
