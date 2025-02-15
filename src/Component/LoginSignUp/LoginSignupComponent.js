import React, { Component } from "react";
import Login_UI from "./Login_UI";
import { CreateNewUser } from "../../Firebase/Firebase_ref";
class LoginSignUp extends Component {
  constructor(props) {
    super();
    this.state = {
      props: props,
      loginDetails: { username: null, password: null },
      signupDetails: { username: null, email: null, password: null }
    };
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    // write Login Code Here
    //also save login state to local storage
    if (this.state.loginDetails.username != null) {
      let userName=this.state.loginDetails.username
      this.state.props.setLoggedIn(true)
      this.state.props.setUserName(userName)
      this.saveUserNameToLocalStorage(userName)
      CreateNewUser(userName)
    }
  }

  saveUserNameToLocalStorage(userName){
    //

  }

  render() {
    return (
      <div className="LoginSignUp">
        <div className="LoginSignUp_inner">
          <Login_UI
            data={this.state.loginDetails}
            handleLogin={this.handleLogin}
          />
        </div>
      </div>
    )
  }
}
export default LoginSignUp;