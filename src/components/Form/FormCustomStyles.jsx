import { TextField } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import React from "react";

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

function PostalTextField(props) {
  const classes = postalStyle();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}
export default PostalTextField;
