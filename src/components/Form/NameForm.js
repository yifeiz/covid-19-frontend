import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

class NameForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label> {label} </label>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    const centerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "auto"
    };
    return (
      <div style={centerStyle}>
        <form onSubmit={this.props.handleSubmit}>
          <Field
            name="firstName"
            type="text"
            component={this.renderInput}
            label="First Name"
            placeholder="First Name"
          />
          <Field
            name="lastName"
            type="text"
            component={this.renderInput}
            label="Last Name"
            placeholder="Last Name"
          />
          <div style={centerStyle}>
            <div>
              <label>Sex</label>

              <label>
                <Field name="sex" component="input" type="radio" value="male" />{" "}
                Male
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="female"
                />{" "}
                Female
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="other"
                />{" "}
                Other
              </label>
              <Field name="sex" component={renderError} />
            </div>
          </div>
          <Field
            name="DOB"
            type="date"
            component={this.renderInput}
            label="Date of Birth"
            placeholder = "MM/DD/YYYY"
          />
          <div style={centerStyle}>
            <button type="submit" className="next">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "track-symptoms", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(NameForm);
