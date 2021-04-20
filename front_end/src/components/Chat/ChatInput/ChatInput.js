import React, { useState } from 'react';
import './ChatInput.css'; // css
import {useAuth0} from '@auth0/auth0-react';

const ChatInput = (props) => {
    const [message, setMessage] = useState('');
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();

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