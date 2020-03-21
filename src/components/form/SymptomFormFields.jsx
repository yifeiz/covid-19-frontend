import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField"
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

export const PostalTextField = ({
  label,
  input,
  meta,
  ...props
}) => {
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
}

export const RadioButton = ({ radioValue, children, input, ...props }) => {
  return (
    <FormControl>
      <RadioGroup row {...input} {...props}>
        <FormControlLabel
          value={radioValue}
          control={<Radio />}
        />
      </RadioGroup>
    </FormControl>
  );
}
