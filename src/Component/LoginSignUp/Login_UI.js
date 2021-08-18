import './login_signup_style.css';
import React from "react";
function LoginSignUp_UI(props) {
  return (
    <div className="Login_Page">
      {/* Divider first*/}
      <div className="LoginSignUp_divider_first">
        <h3 id="LoginSignup_AppName">Chat App</h3>
        <form className="LoginSignUp_form">
          <p id="Login_text">Login</p>
          <label>
            Enter Your Name:
            <input type="text" name="name" onChange={(e) => { props.data.username = e.target.value}} />
          </label>
        </form>
        <div className="LoginSignup_btn_divider">
          <button id="btn_attempt_login_signup" onClick={() => props.handleLogin()}>Login</button>
        </div>
      </div>
    </div>

  )
}
export default LoginSignUp_UI;