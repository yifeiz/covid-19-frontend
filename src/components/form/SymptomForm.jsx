import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Row, Col, Container } from "reactstrap";
import Recaptcha from "react-recaptcha";

import { validate } from "./SymptomFormUtils";
import {
  FORM_HEADER,
  FORM_DISCLAIMER,
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
    console.log("Loaded");
  };

  const recaptchaExpired = () => {
    setIsVerified(false);
  };

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

  return (
    <div className="form__padding">
      <Container fluid>
        <Row>
          <Col md="10">
            <h4 className="header">{FORM_HEADER}</h4>
            <p className="form-disclaimer">{FORM_DISCLAIMER}</p>
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
                    <p className="question">{FORM_POSTAL_CODE_QUESTION}</p>
                    <td colSpan="2">
                      <Field name="postalCode" component={PostalTextField} />
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
    </div>
  );
};

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null)(formWrapped);
