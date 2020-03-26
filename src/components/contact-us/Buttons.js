import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  submitButton: {
    backgroundColor: "#f54263",
    border: "none",
    borderRadius: "24px",
    height: "40px",
    width: "100%",
    color: "white",
    fontFamily: "Open Sans",
    fontWeight: 300,
    fontSize: "1rem",
    letterSpacing: "0.5px",
  }
};

const SubmitButtonWithoutStyles = ({ disabled = false, classes }) => (
  <button
    className={classes.submitButton}
    disabled={disabled}
  >
    Submit
  </button>
);

export const SubmitButton = withStyles(styles)(SubmitButtonWithoutStyles);
