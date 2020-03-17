import React from "react";
import { reduxForm } from "redux-form";
import validate from "./validate";
//TODO setup pages for the symptom outputs
const TestedTrueShortnessBreathForm = props => {
  const { pristine, previousPage, testedTrue, testedFalse, submitting } = props;
  return (
    <form>
      Do you have shortness of breath?
      <div>
        <div>
          <div>
            <button
              type="button"
              onClick={testedTrue}
              disabled={pristine || submitting}
            >
              Yes, I have a Shortness of Breath.
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={testedFalse}
              disabled={pristine || submitting}
            >
              No, I do not have a Shortness of Breath.
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
    </form>
  );
};

export default reduxForm({
  form: "track-symptoms", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(TestedTrueShortnessBreathForm);
