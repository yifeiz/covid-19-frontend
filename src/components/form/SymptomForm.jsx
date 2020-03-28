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
        Your answers are collected and will be aggregated and made available
        publicly, including through our website to help healthcare providers,
        researchers, and others gauge the spread of COVID-19 and inform efforts
        that help keep yourself, your family, and your community healthy. The
        following questionnaire is designed to help collect information
        regarding your risk factors for COVID-19 infection. The questions are
        based on the best available guidance from Canadian public health
        agencies and other stakeholders and will be updated regularly. This
        survey is not intended to facilitate any kind of diagnosis or
        self-assessment for COVID-19. If you suspect you may have COVID-19,
        please seek medical attention. Please review our
        <a href="https://drive.google.com/open?id=1Cb9yb1zFXrQs0TKIAytx-16vCuHpJBDc">
          {" "}
          Terms of Service
        </a>{" "}
        and
        <a href="https://drive.google.com/open?id=1dbkrOLBBp_yqus-oeQ_JXdanDbdb8u-6">
          {" "}
          Privacy Policy
        </a>{" "}
        carefully and if you do not agree to our Terms of Service or are not
        comfortable with our collection, use, and disclosure of the information
        you provide, do not complete this Survey (though we would appreciate if
        you could provide feedback to us at{" "}
        <a href="mailto:flattenofficial@gmail.com">
          flattenofficial@gmail.com
        </a>{" "}
        on how we may be able to address your concerns).
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
                <div style={{ paddingBottom: "10px" }}>
                  By submitting account, you certify you are at least age of the
                  majority in your province/territory and agree to Flattens
                  Terms of Use and Privacy policy. If you do not feel
                  comfortable with this, please do not submit.
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
    </React.Fragment>
  );
};

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null)(formWrapped);
