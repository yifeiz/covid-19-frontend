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
import Box from "@material-ui/core/Box";
import { TextField } from "@material-ui/core";
import {makeStyles,fade} from '@material-ui/core/styles'
var Recaptcha = require("react-recaptcha");

const postalStyle = makeStyles(theme => ({
  root: {
    border: '4px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function PostalTextField(props) {
  const classes = postalStyle();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

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
  renderRadioButton = ({ input, ...rest }) => (
    <FormControl>
      <RadioGroup row row {...input} {...rest}>
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
      return (
        <tr key={question}>
          <th className="question">{question}</th>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field
                value="yes"
                name={question}
                component={this.renderRadioButton}
              >
                <Radio value="yes"></Radio>
              </Field>
            </Box>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field
                value="no"
                name={question}
                component={this.renderRadioButton}
              >
                <Radio value="no"></Radio>
              </Field>
            </Box>
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
      <Container fluid style={{ marginLeft: "5%" }}>
        <Row>
          <Col md="7">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <Table responsive>
                <thead>
                  <tr>
                    <th className="questionRow">Tell us how you feel!</th>
                    <th className="answer">Yes</th>
                    <th className="answer">No</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderQuestions(questions)}
                  <tr key="postal-code">
                    <th className="question">
                      What are the first three digits of your postal code?
                    </th>
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
  else if(!/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/i.test(formValues.postalCode)){
    errors.postalCode = "Invalid Postal Code, should be formatted as A1A 1A1"
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null, { submitForm })(formWrapped);
