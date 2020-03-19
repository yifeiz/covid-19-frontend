import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Container, Row, Col } from "reactstrap";

import { submitForm } from "../../actions";
import image from "./science.png";
import "./SymptomForm.css";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
var Recaptcha = require("react-recaptcha");

class SymptomForm extends React.Component {
  state = { isVerified: false };
  recaptchaLoaded() {
    console.log("Loaded");
  }

  verifyCallback = response => {
    if (response) {
      this.setState({ isVerified: true });
    }
  };

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
  radioButton = ({ input, ...rest }) => (
    <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value={rest.children.props.value}  control={<Radio />}/>
    </RadioGroup>
  </FormControl>  );
  renderQuestions = questions => {
    return questions.map(question => {
      return (
        <tr key={question}>
          <th className="question">{question}</th>
          <td>
            <Field value="yes" name={question} component={this.radioButton}>
            <Radio value="yes"></Radio>
            </Field>
          </td>
          <td>
            <Field value="no" name={question} component={this.radioButton}>
            <Radio value="no"></Radio>

            </Field>
          </td>
        </tr>
      );
    });
  };

  onSubmit = formValues => {
    this.props.submitForm(formValues);
  };

  onChange(value) {
    console.log("Captcha value:", value);
  }

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
      <Container fluid>
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
              <Recaptcha
                sitekey="6LfuVOIUAAAAAOPSfeWxh-Juu9_gJQ_cEu3mRitY"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
              <button
                className="ui button primary"
                disabled={!this.state.isVerified}
              >
                Submit
              </button>
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
 