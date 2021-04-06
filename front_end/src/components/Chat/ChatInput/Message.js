import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import '../Chat.css'

const Message = (props) => {
    const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const getTextStyle = (userEmail, messageEmail) => {
        if(userEmail == messageEmail) {
            return {
              backgroundColor: 'white', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: 'red', float:'right'
            }
           } else {
             return {
                backgroundColor: 'white', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: 'red', float:'left'
             }
           }
    }

    return (
        isAuthenticated &&
        <div class="Row">
            <div style={getTextStyle(user.email, props.user)}>
                <p><strong class="chat-username">{props.user}</strong></p>
                <p class="chat-message">{props.message}</p>
            </div>
        </div>
    );
    }

export default Message;