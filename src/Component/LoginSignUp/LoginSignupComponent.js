import React, { Component } from "react";
import Login_UI from "./Login_UI";

class LoginSignUp extends Component {
  constructor(props) {
    {console.log(props)}
    super();
    this.state = {
      props:props,
      loginDetails:{username:null,password:null},
      signupDetails:{username:null,email:null,password:null},
      isLoginPageVisible : true
    };
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    // write Login Code Here
    //also save login state to local storage
    if(this.state.loginDetails.username!=null && this.state.loginDetails.password!=null){
      this.state.props.setLoggedIn(true)
    }
  }
  
  render() {
    return (
      <div className="LoginSignUp">
        <div className="LoginSignUp_inner">
            <Login_UI
              data={this.state.loginDetails}
              attemptLogin={this.handleLogin}
              isLoginPageVisible={this.isLoginPageVisible}
            />
        </div>
      </div>
    )
  }
}
export default LoginSignUp;