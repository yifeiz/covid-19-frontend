import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

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
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(MedicalHistory);
