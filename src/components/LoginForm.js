import React from "react";
import TextInput from "./UI/TextInput.js"
import SubmitButton from "./UI/SubmitButton.js"
class LoginForm extends React.Component {
  render() {
    const form = <form style={this.props.style} id="form-LoginForm">
                    <h1>Login</h1>
                    <TextInput identifier="Username"></TextInput><br></br>
                    <TextInput identifier="Password"></TextInput>
                    <SubmitButton identifier="Login"></SubmitButton>
                </form>;

    return form;
  }
  
}

export default LoginForm;
