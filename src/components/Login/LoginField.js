import React from "react";
import { Field } from "redux-form";
//Adjust this to be a pretty TextInput
class LoginField extends React.Component {
  render() {
    console.log(this.props.identifier);
    return (
      <Field
        component={this.props.component}
        type="text"
        name={"input-form-text-" + this.props.identifier}
        className={"input-form-text-" + this.props.identifier}
        placeholder={this.props.identifier}
      ></Field>
    );
  }
}

export default LoginField;
