import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Row, Col, Container } from "reactstrap";
import Recaptcha from "react-recaptcha";

import { validate } from "./SymptomFormUtils";
import {
  FORM_HEADER,
  FORM_QUESTIONS,
  FORM_POSTAL_CODE_QUESTION
} from "./SymptomFormConstants";
import image from "../../assets/science.png";
import "./SymptomForm.css";
import Box from "@material-ui/core/Box";
import { PostalTextField, RadioButton } from "./SymptomFormFields";
import Footer from "../footer/Footer";

const SymptomForm = props => {
  const [isVerified, setIsVerified] = useState(false);

  const recaptchaLoaded = () => {
    //console.log("Loaded");
  };

  const recaptchaExpired = () => {
    setIsVerified(false);
  };

  const verifyCallback = response => {
    if (response) {
      setIsVerified(true);
      props.change("reactVerification", response);
    }
  };

  const TextInput = ({ input, label, meta }) => {
    return (
      <div className="hidden">
        <label> {label} </label>
        <input {...input} />
      </div>
    );
  };
  const renderQuestions = questions => {
    return questions.map(question => {
      const label = `q${questions.indexOf(question) + 1}`;

      return (
        <tr key={label}>
          <td>
            <p className="question">{question}</p>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field
                name={label}
                radioValue="y"
                component={RadioButton}
              ></Field>
            </Box>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field
                name={label}
                radioValue="n"
                component={RadioButton}
              ></Field>
            </Box>
          </td>
        </tr>
      );
    });
  };

  const FORM_DISCLAIMER = (
    <React.Fragment>
      <p>
        Your answers are collected <strong>anonymously</strong>, and will be
        aggregated to help healthcare providers gauge the spread of COVID-19.The
        following questionnaire is designed to help assess your risk factors for
        COVID-19 infection. Completed questionnaires will be used to inform
        healthcare systems. This website also has guidance on how to keep
        yourself, your family, and your community healthy. The questions are
        based on the best available guidance from Canadian public health
        agencies and other stakeholders, and will be updated regularly. You
        cannot be diagnosed with COVID simply by taking this survey online. If
        you are experiencing severe symptoms, seek medical attention.
      </p>
      <p style={{ fontStyle: "Normal", fontWeight: "Bold" }}>
        Please fill in this form even if you are experiencing no symptoms
      </p>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="form__padding">
        <Container fluid>
          <Row>
            <Col md="10">
              <h4 className="header">{FORM_HEADER}</h4>
              <div className="form-disclaimer">{FORM_DISCLAIMER}</div>
            </Col>
            <Col md="2" className="frame">
              <img
                className="microscope-icon"
                src={image}
                alt="Microscope Icon"
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <form
                onSubmit={props.handleSubmit(props.onSubmit)}
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
                    {renderQuestions(FORM_QUESTIONS)}
                    <tr key="postal-code">
                      <td>
                        <p className="question">{FORM_POSTAL_CODE_QUESTION}</p>
                      </td>
                      <td colSpan="2">
                        <Field name="postalCode" component={PostalTextField} />
                        <Field
                          component={TextInput}
                          name="reactVerification"
                          type="hidden"
                        />
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
                  {!isVerified && (
                    <div className="error">
                      Please make sure to fill out all of the questions above.
                    </div>
                  )}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null)(formWrapped);
