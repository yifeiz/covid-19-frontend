import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Container, Row, Col } from "reactstrap";

import { submitForm } from "../../actions";
import image from "./science.png";
import "./SymptomForm.css";

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
        <tr key={question}>
          <th className="question">{question}</th>
          <td>
            <Field name={question} component="input" type="radio" value="yes" />
          </td>
          <td>
            <Field name={question} component="input" type="radio" value="no" />
          </td>
        </tr>
      );
    });
  };

  onSubmit = formValues => {
    this.props.submitForm(formValues);
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
      <Container>
        <Row>
          <Col md="8">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <Table responsive>
                <thead>
                  <tr>
                    <th>Tell us how you feel!</th>
                    <th>Yes</th>
                    <th>No</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderQuestions(questions)}
                  <tr key="postal-code">
                    <th className="question">
                      What are the first three digits of your postal code?
                    </th>
                    <td colSpan="2">
                      <Field name="postalCode" component={this.renderInput} />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <button className="ui button primary">Submit</button>
            </form>
          </Col>
          <Col className="d-none d-md-block">
            <span className="frame">
              <img src={image} />
            </span>
          </Col>
        </Row>
      </Container>
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

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null, { submitForm })(formWrapped);
