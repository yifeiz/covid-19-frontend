import React from "react";
import TextInput from "../UI/TextInput.js"
class Login extends React.Component {
  form = <div>
          <TextInput identifier="Username"></TextInput><br></br>
          <TextInput identifier="Password"></TextInput>
         </div>;
  render() {
    return this.form;
  }
  
}

export default Login;
