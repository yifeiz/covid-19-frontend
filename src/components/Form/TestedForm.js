import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";


const TestedForm = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
        
    </form>
  );
};

export default reduxForm({
  form: "track-symptoms", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(TestedForm);
