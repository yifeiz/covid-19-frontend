import React from "react";
import { reduxForm } from "redux-form";
import validate from "./validate";

const TestedForm = props => {
  const { pristine, previousPage, testedTrue, testedFalse, submitting } = props;
  return (
    <form>
      Have you tested positive for COVID-19 at a hospital?
      <div>
        <div>
          <div>
            <button
              type="button"
              onClick={testedTrue}
              disabled={pristine || submitting}
            >
              I have tested Positive.
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={testedFalse}
              disabled={pristine || submitting}
            >
              I have been not been tested or I have tested negative in the past.
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
})(TestedForm);
