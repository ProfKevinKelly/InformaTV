import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Auth0Provider} from '@auth0/auth0-react';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
<Auth0Provider 
domain={domain} clientId={clientID} redirectUri={window.location.origin}  audience="https://dev-l7o00ivv.eu.auth0.com/api/v2/"
scope="read:current_user update:current_user_metadata">
    <App />
</Auth0Provider>
, document.getElementById('root'));
registerServiceWorker();
