import React from 'react'
import { PushMessageToFirebase} from '../../Firebase/Firebase_ref';


function PushMessage(msg,userName){
    PushMessageToFirebase(msg,userName)
}


function ChatAppComponent(props) {
  let text="sample_message"
  return (
    <div className="ChatComponent">
      <input type="text" onChange={(e)=>text=(e.target.value)}></input>
      <button onClick={()=>PushMessage(text,props.userName)}>Send Message</button>
    </div>

  );
}
export default ChatAppComponent;
