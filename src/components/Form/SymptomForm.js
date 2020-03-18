import React from "react";
import { Field, reduxForm } from "redux-form";

class SymptomForm extends React.Component {
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

  renderQuestions = questions => {
    return questions.map(question => {
      return (
        <div>
          <label>{question}</label>
          <div>
            <label>
              <Field
                name={question}
                component="input"
                type="radio"
                value="yes"
              />
              Yes
            </label>
            <label>
              <Field
                name={question}
                component="input"
                type="radio"
                value="no"
              />
              No
            </label>
          </div>
        </div>
      );
    });
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const questions = [
      "Do you have a fever, chills or shakes?",
      "Do you have a new or worsening cough?",
      "Are you experiencing shortness of breath (difficulty breathing, breathlessness)?",
      "Are you 60 years of age or older?",
      "Do you have any of the following medical conditions: diabetes, heart disease, active cancer, history of stroke, asthma, COPD, dialysis",
      "Have you traveled outside of Canada within the last 14 days?",
      "Have you had close contact with someone who is coughing, has a fever, or is otherwise sick and has been outside of Canada in the last 14 days?"
    ];
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {this.renderQuestions(questions)}
        <Field
          name="postalCode"
          component={this.renderInput}
          label="Enter Postal Code"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.postalCode) {
    errors.postalCode = "You must enter a postal Code";
  }
  return errors;
};

export default reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);
