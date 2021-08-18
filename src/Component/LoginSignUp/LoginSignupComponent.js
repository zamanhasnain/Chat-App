import React, { Component } from "react";
import Login_UI from "./Login_UI";
import SignUp_UI from "./SignUp_UI";

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
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handlecurrentPage=this.handlecurrentPage.bind(this)
  }

  togglePage(){
    //Toggle bw Login and Signup
    console.log(this.state)
  }

  handleLogin(e) {
    // write Login Code Here
    //also save login state to local storage
    if(this.state.loginDetails.username!=null && this.state.loginDetails.password!=null){
      this.state.props.setLoggedIn(true)
    }
  }

  handleSignUp(e) {
    // write Signup Code Here
    //also save login state to local storage
    if(this.state.signupDetails.username!=null && this.state.signupDetails.email!=null && this.state.signupDetails.password!=null){
      this.state.props.setLoggedIn(true)
  }
    
  }
  
  handlecurrentPage(e){
    this.setState({["isLoginPageVisible"]:!this.state.isLoginPageVisible})
  } 

  render() {
    return (
      <div className="LoginSignUp">
        <div className="LoginSignUp_inner">
          {((this.state.isLoginPageVisible == true) ? (
            <Login_UI
              data={this.state.loginDetails}
              attemptLogin={this.handleLogin}
              isLoginPageVisible={this.isLoginPageVisible}
              handlecurrentPage={this.handlecurrentPage}
            />)
            :
            (
              <SignUp_UI
                data={this.state.signupDetails}
                attemptSignup={this.handleSignUp}
                isLoginPageVisible={this.isLoginPageVisible}
                handlecurrentPage={this.handlecurrentPage}
              />
            ))
          }
          
        </div>
      </div>
    )
  }
}
export default LoginSignUp;