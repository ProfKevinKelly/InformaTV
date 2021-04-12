import React, { useState } from 'react';
import './ChatInput.css'; // css
import {useAuth0} from '@auth0/auth0-react';

const ChatInput = (props) => {
    // const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();

    // const getUserTokendata = async () => {
    //     const domain = "dev-l7o00ivv.eu.auth0.com";
    
    //     try {
    //       accessToken = await getAccessTokenSilently({
    //         audience: `https://${domain}/api/v2/`,
    //         scope: "read:current_user",
    //       });
    //       localStorage.setItem('accessToken', accessToken)
    //     } catch (e) {
    //       console.log(e.message);
    //     }
    //   };
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        const isEmailProvided = user.email && user.email !== '';
        const isMessageProvided = message && message !== '';

        if (isEmailProvided && isMessageProvided) {
            props.sendMessage(user.email, message);
            onMessageSend();
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onUserUpdate = (e) => {
        setUser(e.target.value);
    }

    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }
    const onMessageSend = (e) => {
        setMessage('');
    }
    // getUserTokendata();
    return (
        isAuthenticated &&
        <form class="form-container"
            onSubmit={onSubmit}>
            <div class="logged-in-user">{user.email}</div>
            <input class="input-window"
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button class="send-message-button">Send</button>
        </form>
    )
};

export default ChatInput;