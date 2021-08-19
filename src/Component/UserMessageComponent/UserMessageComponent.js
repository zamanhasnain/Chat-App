import './userMessages_style.css'
import React, { useState } from 'react'
import { GetAllMessages } from '../../Firebase/Firebase_ref';

let url = 'https://rameshhospitals.com/wp-content/uploads/2019/07/3.jpg.png';
function getData() {
    let x = [];
    GetAllMessages().on('child_added', function (snapshot) {
        x.push(snapshot.val())
    });
    return x;
}
// message_to= friend
//message_from= my name
function UserMessageComponent(props) {
    const [messages, setMessages] = React.useState([])
    setInterval(() => {
        setMessages(getData())
    }, 500)
    return (
        <div className="UserMessages">
            {(messages).map((message) => {
                if (message.from == props.message_from && message.to == props.message_to)
                    return (<p id="User_message_sent" >{message.msg}</p>)
                if (message.from == props.message_to && message.to == props.message_from)
                    return (<p id="User_message_recieved" >{message.msg}</p>)
            })}
        </div>
    );
}
export default UserMessageComponent;
