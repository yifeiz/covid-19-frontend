import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const postalStyle = makeStyles(theme => ({
  root: {
    border: "4px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 5,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

export const PostalTextField = ({ label, input, meta, ...props }) => {
  const classes = postalStyle();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      placeholder={label}
      error={meta.touched && meta.invalid}
      helperText={meta.touched && meta.error}
      {...input}
      {...props}
    />
  );
};
const blackColor = "0,0,0";
const primaryColor = "#4287f5";
const RadioStyle = makeStyles(theme => ({
  root: {
    padding: "13px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checked: {
    color: primaryColor + "!important"
  },
  radio: {
    color: primaryColor + "!important"
  },
  radioChecked: {
    width: "23px",
    height: "23px",
    border: "1px solid " + primaryColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(" + blackColor + ", .54)",
    borderRadius: "50%"
  }
}));
const CheckboxRadio = props => {
  const classes = RadioStyle();
  return (
    <Radio
      icon={<FiberManualRecord className={classes.radioUnchecked} />}
      checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
      classes={{ checked: classes.radio }}
      {...props}
    />
  );
};

export const RadioButton = ({ radioValue, children, input, ...props }) => {
  return (
    <FormControl>
      <RadioGroup row {...input} {...props}>
        <FormControlLabel value={radioValue} control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
};
