import React from "react";
import { Field, reduxForm } from "redux-form";
import { Row, Col, Container } from "reactstrap";
import { withStyles } from "@material-ui/styles";
import { InputField, MultiLineInputField } from "./Fields";
import { SubmitButton } from "./Buttons";

const requiredFields = [
  ["issue", "Required"],
  ["details", "Required"]
];

const validate = values =>
  requiredFields.reduce((errors, requiredField) => 
    values[requiredField[0]] 
      ? errors 
      : { 
          ...errors,
          [requiredField[0]]: requiredField[1]
        },
  {});

const styles = {
  root: {
    padding: "20px 10%"
  },
  header: {
    padding: "20px 0px"
  }
};

// TODO: remove this once backend is ready
const submit = values => {
  console.log("form values", values);
};

const ReportAnIssueForm = ({ handleSubmit, classes }) => (
  <Container className={classes.root}>
    <div className={classes.header}>
      <h3>Contact Us</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs="12">
          <Field 
            name="email" 
            label="Email"
            component={InputField}
          />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Field 
            name="issue" 
            label="Issue"
            component={InputField}
          />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Field
            name="details" 
            label="Details of Issue" 
            component={MultiLineInputField}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3}}>
          <SubmitButton />
        </Col>
      </Row>
    </form>
  </Container>
);

const ReportAnIssueReduxFormConnected = reduxForm({
  form: "reportAnIssueForm",
  validate,
  onSubmit: submit
})(ReportAnIssueForm);

export default withStyles(styles)(ReportAnIssueReduxFormConnected);
