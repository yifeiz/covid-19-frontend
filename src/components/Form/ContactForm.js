import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const ContactForm = props => {
  const { handleSubmit, previousPage } = props;
  //Insert Validation for Postal Code
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="postal"
        type="postal"
        component={renderField}
        label="Postal Code"
      />
      <Field
        name="familyDoctor"
        type="text"
        component={renderField}
        label="Name of Family Doctor"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "track-symptoms", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ContactForm);
