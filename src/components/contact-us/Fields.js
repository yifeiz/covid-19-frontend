import React from "react";
import { withStyles } from "@material-ui/styles";
import Input from '@material-ui/core/Input'

const styles = {
  label: {
    display: "block",
    marginBottom: "6px"
  },
  input: {
    padding: "6px 7px 7px 6px"
  },
  inputRoot: {
    padding: "2px"
  },
  error: {
    fontStyle: "italic",
    color: "#f54263"
  }
};

const InputFieldWithoutStyles = ({ input, label, classes, meta: { touched, error } }) => (
  <div className={classes.root}>
    <label className={classes.label}>{label}</label>
    <Input
      {...input}
      classes={{ input: classes.input, root: classes.inputRoot }}
      disableUnderline
      fullWidth
    />
    {touched && error && <span className={classes.error}>{error}</span>}
  </div>
);


const MultiLineInputFieldWithoutStyles = ({ input, label, classes, meta: { touched, error } }) => (
  <div className={classes.root}>
    <label className={classes.label}>{label}</label>
    <Input
      {...input}
      classes={{ input: classes.input, multiline: classes.inputRoot }}
      disableUnderline
      fullWidth 
      multiline 
      rows="4"
    />
    {touched && error && <span className={classes.error}>{error}</span>}
  </div>
);

export const InputField = withStyles(styles)(InputFieldWithoutStyles);
export const MultiLineInputField = withStyles(styles)(MultiLineInputFieldWithoutStyles);
