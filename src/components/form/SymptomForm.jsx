import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Row, Col, Container } from "reactstrap";

import image from "../../assets/science.png";
import "./SymptomForm.css";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import PostalTextField from "./FormCustomStyles";
var Recaptcha = require("react-recaptcha");

class SymptomForm extends React.Component {
  state = { isVerified: false };
  recaptchaLoaded() {
    console.log("Loaded");
  }

  recaptchaExpired() {
    this.setState({ isVerified: false });
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
  renderRadioButton = ({ input, ...rest }) => (
    <FormControl>
      <RadioGroup row {...input} {...rest}>
        <FormControlLabel
          value={rest.children.props.value}
          control={<Radio />}
        />
      </RadioGroup>
    </FormControl>
  );
  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <PostalTextField
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    ></PostalTextField>
  );
  renderQuestions = questions => {
    return questions.map(question => {
      const label = `q${questions.indexOf(question) + 1}`;

      return (
        <tr key={label}>
          <p className="question">{question}</p>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field value="y" name={label} component={this.renderRadioButton}>
                <Radio value="y"></Radio>
              </Field>
            </Box>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field value="n" name={label} component={this.renderRadioButton}>
                <Radio value="n"></Radio>
              </Field>
            </Box>
          </td>
        </tr>
      );
    });
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
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
      "Do you have any of the following medical conditions: diabetes, heart disease, active cancer, history of stroke, asthma, COPD, dialysis, or are immunocompromised?",
      "Have you traveled outside of Canada within the last 14 days?",
      "Have you had close contact with someone who is coughing, has a fever, or is otherwise sick and has been outside of Canada in the last 14 days?"
    ];
    return (
      <Container fluid>
        <Row>
          <Col md="7">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <h4>Tell us how you feel !</h4>
              <p className="formDisclaimer">
                The following questionnaire is designed to help assess your risk
                factors for COVID-19 infection and to provide guidance on how to
                keep yourself, your family, and your community healthy. The
                questions are based on the best available guidance from Canadian
                public health agencies and other stakeholders, and will be
                updated regularly. Your answers are collected anonymously, and
                will be aggregated to help healthcare providers gauge the spread
                of COVID-19.
              </p>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="answer">Question</th>
                    <th className="answer">Yes</th>
                    <th className="answer">No</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderQuestions(questions)}
                  <tr key="postal-code">
                    <p className="question">
                      What are the first three characters of the postal code of
                      your current residence?
                    </p>
                    <td colSpan="2">
                      <Field
                        name="postalCode"
                        component={this.renderTextField}
                      ></Field>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Recaptcha
                sitekey="6LfuVOIUAAAAAOPSfeWxh-Juu9_gJQ_cEu3mRitY"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
                expiredCallback={this.recaptchaExpired}
              />
              <div className="submit">
                <button
                  className="submit-button red-button"
                  disabled={!this.state.isVerified}
                >
                  Submit
                </button>
              </div>
            </form>
          </Col>
          <Col className="d-none d-md-block">
            <span className="frame">
              <img src={image} alt="Microscope Icon" />
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.q1) {
    errors.q1 = "Required";
  }
  if (!formValues.q2) {
    errors.q2 = "Required";
  }
  if (!formValues.q3) {
    errors.q3 = "Required";
  }
  if (!formValues.q4) {
    errors.q4 = "Required";
  }
  if (!formValues.q5) {
    errors.q5 = "Required";
  }
  if (!formValues.q6) {
    errors.q6 = "Required";
  }
  if (!formValues.q7) {
    errors.q7 = "Required";
  }

  if (!formValues.postalCode) {
    errors.postalCode = "You must enter a postal Code";
  } else if (
    !/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]$/i.test(formValues.postalCode)
  ) {
    errors.postalCode = "Invalid Postal Code, should be formatted as A1A";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null)(formWrapped);
