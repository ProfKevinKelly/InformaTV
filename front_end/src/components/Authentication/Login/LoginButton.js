import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
import './LoginButton.css';

const LoginButton = () =>{
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        !isAuthenticated && (
        <button class="block" onClick={() => loginWithRedirect()}>
            Log In
        </button>
        )
    )
}

export default LoginButton;

//#endregion
