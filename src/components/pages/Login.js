import React from "react";
import LoginForm from "../Login/LoginForm";
class Login extends React.Component {
  render() {
    const loginStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "auto"
    };

    return (
      <div id="loginForm-Wrapper" style={{ height: "100%", width: "100%" }}>
        <LoginForm style={loginStyle}></LoginForm>
      </div>
    );
  }
}

export default Login;
