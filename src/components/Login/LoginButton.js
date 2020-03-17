import React from "react";
//Adjust this to be a pretty TextInput
class LoginButton extends React.Component {
  render() {
    return (
      <button id={"loginButton-" + this.props.identifier}>
        {this.props.identifier}
      </button>
    );
  }
}

export default LoginButton;
