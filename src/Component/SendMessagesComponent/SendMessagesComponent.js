import './sendMessages_style.css'
import React from 'react'
import { PushMessageToFirebase } from '../../Firebase/Firebase_ref'

function PushMessage(msg,from,to) {
    PushMessageToFirebase(msg, from,to)
}

function SendMessageComponent(props) {
    let text = "sample_message"
    return (
        <div className="SendMessageComponent">
            <input type="text" onChange={(e) => text = (e.target.value)}></input>
            <button onClick={() => PushMessage(text,props.from,props.to)}>Send Message</button>
        </div>
    )

}
export default SendMessageComponent;
