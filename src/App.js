import './App.css';
import React from 'react'
//sdk part
import LoginSignUp from './Component/LoginSignUp/LoginSignupComponent';
import ChatAppComponent from './Component/ChatAppComponent/ChatAppComponent';

function App(){
  const[isLoggedIn, setLoggedIn]=React.useState(false)
  const[userName, setUserName]=React.useState("null")
  return (
    <div className="App">
      {(isLoggedIn==false)?
      (<LoginSignUp 
        setLoggedIn={setLoggedIn}
        setUserName={setUserName}/>)
      :
      (<ChatAppComponent userName={userName}/>)
      }
    </div>

  );
}
export default App;
