import React from "react";
import LoginField from "./LoginField.js";
import LoginButton from "./LoginButton.js";
import { reduxForm } from "redux-form";
import validate from "../Form/validate.js";
class LoginForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    const form = (
      <form
        style={this.props.style}
        id="form-LoginForm"
        onSubmit={this.props.handleSubmit}
      >
        <h1>Login</h1>
        <LoginField
          component={this.renderInput}
          identifier="Username"
        ></LoginField>
        <LoginField
          component={this.renderInput}
          identifier="Password"
        ></LoginField>
        <LoginButton identifier="Login"></LoginButton>
      </form>
    );

    return form;
  }
}

export default reduxForm({
  form: "login", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(LoginForm);
