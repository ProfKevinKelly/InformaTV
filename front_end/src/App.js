import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import LoginButton from './components/Authentication/Login/LoginButton';
import LogoutButton from './components/Authentication/Logout/LogoutButton';
import Profile from './components/Authentication/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">InformaTV</h1>
        </header>
        <div>
          <LoginButton/>
          <LogoutButton/>
          <Profile/>
        </div>
        <Customers />
      </div>
    );
  }
}

export default App;
