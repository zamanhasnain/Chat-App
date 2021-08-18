import './chat_style.css'
import React from 'react'
import UsersListComponent from '../UsersListComponent/UsersListComponent';
import SendMessageComponent from '../SendMessagesComponent/SendMessagesComponent';
import UserMessagesComponent from '../UserMessageComponent/UserMessageComponent';


function ChatAppComponent(props) {
    let message_from = props.userName;
    const [message_to, set_message_to] = React.useState(null);
    return (
        <div className="ChatComponent">

            <div className="div_users">
                <UsersListComponent set_message_to={set_message_to} />
            </div>
            <div className="div_chat">
                <div className="div_messages">
                    <UserMessagesComponent
                        message_to={message_to}
                        message_from={message_from}
                    />
                </div>
                <div className="div_send_message">
                    <SendMessageComponent
                        from={props.userName}
                        to={message_to}
                    />
                </div>
            </div>


        </div>
    );
}
export default ChatAppComponent;
