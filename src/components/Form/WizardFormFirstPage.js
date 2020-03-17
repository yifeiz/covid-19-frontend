import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

class WizardFormFirstPage extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label> {label} </label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={this.renderInput}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={this.renderInput}
          label="Last Name"
        />
        <div>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage);
