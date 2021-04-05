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
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:44320/hubs/chathub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
                    connection.on('ReceiveMessage', (message, user) => {
                        const updatedChat = [...latestChat.current];
                        let message2 = {
                          message: message,
                          user: user
                        }
                        console.log("received");
                        updatedChat.push(message2);
                    
                        setChat(updatedChat);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const sendMessage = async (user, message) => {
        const chatMessage = {
            user: user,
            message: message
        };
        if (connection.connectionStarted) {
            try {
                console.log("Sending", message);
                await connection.invoke('SendMessage', message, user);
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