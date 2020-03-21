import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Row, Col, Container } from "reactstrap";

import { validate } from "./SymptomFormUtils";
import image from "../../assets/science.png";
import "./SymptomForm.css";
import Box from "@material-ui/core/Box";
import { PostalTextField, RadioButton } from "./SymptomFormFields";
var Recaptcha = require("react-recaptcha");

const QUESTIONS = [
  "Do you have a fever, chills or shakes?",
  "Do you have a new or worsening cough?",
  "Are you experiencing shortness of breath (difficulty breathing, breathlessness)?",
  "Are you 60 years of age or older?",
  "Do you have any of the following medical conditions: diabetes, heart disease, active cancer, history of stroke, asthma, COPD, dialysis, or are immunocompromised?",
  "Have you traveled outside of Canada within the last 14 days?",
  "Have you had close contact with someone who is coughing, has a fever, or is otherwise sick and has been outside of Canada in the last 14 days?"
];

const SymptomForm = props => {
  const [isVerified, setIsVerified] = useState(false);
  
  const recaptchaLoaded = () => {
    console.log("Loaded");
  }

  const recaptchaExpired = () => {
    setIsVerified(false);
  }

  const verifyCallback = response => {
    if (response) {
      setIsVerified(true);
    }
  };
  
  const renderQuestions = questions => {
    return questions.map(question => {
      const label = `q${questions.indexOf(question) + 1}`;

      return (
        <tr key={label}>
          <p className="question">{question}</p>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field name={label} radioValue="y" component={RadioButton}>
              </Field>
            </Box>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field name={label} radioValue="n" component={RadioButton}>
              </Field>
            </Box>
          </td>
        </tr>
      );
    });
  };

  const onSubmit = formValues => {
    console.log(formValues);
    props.onSubmit(formValues);
  };

  return (
    <Container fluid>
      <Row>
        <Col md="10" >
          <h4 className="header">Tell us how you feel!</h4>
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
        </Col>
        <Col md="2" className="frame">
          <img className="microscope-icon" src={image} alt="Microscope Icon" />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <form
            onSubmit={props.handleSubmit(onSubmit)}
            className="ui form error"
          >
            <Table responsive>
              <thead>
                <tr>
                  <th className="answer">Question</th>
                  <th className="answer">Yes</th>
                  <th className="answer">No</th>
                </tr>
              </thead>
              <tbody>
                {renderQuestions(QUESTIONS)}
                <tr key="postal-code">
                  <p className="question">
                    What are the first three characters of the postal code of
                    your current residence?
                  </p>
                  <td colSpan="2">
                    <Field name="postalCode" component={PostalTextField}/>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="captcha">
              <Recaptcha
                sitekey="6LfuVOIUAAAAAOPSfeWxh-Juu9_gJQ_cEu3mRitY"
                render="explicit"
                onloadCallback={recaptchaLoaded}
                verifyCallback={verifyCallback}
                expiredCallback={recaptchaExpired}
              />
            </div>
            <div className="submit">
              <button
                className="submit-button red-button"
                disabled={!isVerified}
              >
                Submit
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null)(formWrapped);
