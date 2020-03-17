import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";


const MedicalHistory = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Are you on any Medication? If so list please them below.</label>
        <div>
          <Field name="mediation" component="textarea" placeholder="Medication" />
        </div>
      </div>
      <div>
        <label>Do you have any Allergies? If so list please them below.</label>
        <div>
          <Field name="allergies" component="textarea" placeholder="Allergies" />
        </div>
      </div>
      <div>
        <label>Do you have any pre-existing Medical Conditions? If so list please them below.</label>
        <div>
          <Field name="conditions" component="textarea" placeholder="Medical Condition" />
        </div>
      </div>

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
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
})(MedicalHistory);
