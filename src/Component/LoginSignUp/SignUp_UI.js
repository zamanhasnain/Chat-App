import React from "react";
function SignUp_UI(props) {
  return (
    <div className="Signup_Page">
      {/* Divider first*/}
      <div className="LoginSignUp_divider_first">
        <h3 id="LoginSignup_AppName">ChatApp</h3>
        <form className="LoginSignUp_form">
          <p id="Login_text">Signup</p>
          <label>
            Name:
            <input type="text" name="name" onChange={(e) => { props.data.username = e.target.value }} />
          </label>
          <label>
            Email:
            <input type="text" name="name" onChange={(e) => { props.data.email = e.target.value }} />
          </label>
          <label>
            Password:
            <input type="text" name="name" onChange={(e) => { props.data.password = e.target.value }} />
          </label>
        </form>
        <div className="LoginSignup_btn_divider">
          <button id="btn_attempt_login_signup" onClick={() => props.attemptSignup()}>Signup</button>
          <button id="btn_attempt_login_signup_secondary" onClick={() => props.handlecurrentPage()}>Login</button>
        </div>
      </div>
    </div>
  )
}
export default SignUp_UI;