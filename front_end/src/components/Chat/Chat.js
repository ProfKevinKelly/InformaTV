import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import './Chat.css'; // css
import ChatWindow from './ChatInput/ChatWindow';
import ChatInput from './ChatInput/ChatInput';


const Chat = () => {
    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder() // Create connection to hub
            .withUrl('https://localhost:44320/hubs/chathub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start() // Start the connection
                .then(result => {
                    console.log('Connected!');
                    connection.on('ReceiveMessage', (message, user) => { // Listen for 'ReceiveMessage' Event from hub
                        const updatedChat = [...latestChat.current];
                        let message2 = {
                          message: message,
                          user: user
                        }
                        updatedChat.push(message2);
                    
                        setChat(updatedChat);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const sendMessage = async (user, message) => {
        if (connection.connectionStarted) {
            try {
                await connection.invoke('SendMessage', message, user);// This is how to invoke a method on the hub
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    return (
        <div class="chat-container">
            <div class="Row">
                <div class="Column">
                    <div class="channels-list">
                        <div class="channel-row">
                            <div class="channel-name" >John Doe</div>
                        </div>
                        <div class="channel-row">
                            <div class="channel-name">Jane Doe</div>
                        </div>
                        <div class="channel-row">
                            <div class="channel-name">Jack Doe</div>
                        </div>
                        <div class="channel-row">
                            <div class="channel-name">James Doe</div>
                        </div>
                    </div>
                </div>
                <div class="chat-window">
                    <ChatWindow chat={chat} />
                </div>
                <div class="chat-input">
                    <ChatInput sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Chat;