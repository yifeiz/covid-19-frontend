import React from "react";
import LoginForm from "../LoginForm"
class Login extends React.Component {
  render() {
    const loginStyle = {
      display:"flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column",
      "height":"auto"
    }

    return <div id="loginForm-Wrapper" style={{height:"100%",width:"100%"}}><LoginForm style={loginStyle}></LoginForm></div>;
  }
  
}

export default Login;
