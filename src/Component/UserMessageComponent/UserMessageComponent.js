import './userMessages_style.css'
import React, { useState } from 'react'
import { GetAllMessages } from '../../Firebase/Firebase_ref';

let url = 'https://rameshhospitals.com/wp-content/uploads/2019/07/3.jpg.png';
function UserMessagesComponent(props) {
    let message_to = props.message_to;      //  friend
    let message_from = props.message_from;  // my name
    const [messages, setMessages] = React.useState([])

    let x = [];
    React.useEffect(() => {
        GetAllMessages().on('child_added', function (snapshot) {
            x.push(snapshot.val())
            setMessages(x)
        });
    }, [messages])
    return (
        <div className="UserMessages">
                {(messages).map((message) => {
                    if(message.from==props.message_from && message.to==props.message_to) 
                      return (<p id="User_message_sent" >{message.msg}</p>)
                    else if(message.from==props.message_to && message.to==props.message_from)  
                    return (<p id="User_message_recieved" >{message.msg}</p>)
                })}
        </div>
    );
}
export default UserMessagesComponent;
