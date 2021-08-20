import './login_signup_style.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginSignUp_UI(props) {
  return (
    <div className="Login_Page">
      {/* Divider first*/}
      <div className="LoginSignUp_divider_first">
        <h3 id="LoginSignup_AppName">Newton Messenger</h3>
        <form className="LoginSignUp_form">
          <p id="Login_text">Login</p>


          <input type="text" class="login_Inputtext" placeholder="Enter Your Name" name="name" onChange={(e) => { props.data.username = e.target.value }}></input>



        </form>
        <div className="LoginSignup_btn_divider">
          <button id="btn_attempt_login_signup" onClick={() => props.handleLogin()}>Login</button>
        </div>
      </div>
    </div >

  )
}
export default LoginSignUp_UI;