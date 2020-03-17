import React from "react";
import { connect } from "react-redux";

import NameForm from "./NameForm.js";

import {
  nextPage,
  previousPage,
  onSubmit,
  testedTrue,
  testedFalse
} from "../../actions";
import ContactForm from "./ContactForm.js";
import MedicalHistory from "./MedicalHistory";
import TestedForm from "./TestedForm.js";

class TrackSymptomsForm extends React.Component {
  render() {
    const { page, tested } = this.props;
    console.log(page);
    return (
      <div>
        {page === 1 && <NameForm onSubmit={this.props.nextPage} />}
        {page === 2 && (
          <ContactForm
            previousPage={this.props.previousPage}
            onSubmit={this.props.nextPage}
          />
        )}
        {page === 3 && (
          <MedicalHistory
            previousPage={this.props.previousPage}
            onSubmit={this.props.nextPage}
          />
        )}
        {page === 4 && (
          <TestedForm
            previousPage={this.props.previousPage}
            testedTrue={this.props.testedTrue}
            testedFalse={this.props.testedFalse}
          />
        )}
        {page === 5 && tested && <div>You have been tested</div>}
        {page === 5 && !tested && <div>You have not been tested</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    page: state.trackSymptomsForm.page,
    tested: state.trackSymptomsForm.tested
  };
};

export default connect(mapStateToProps, {
  nextPage,
  previousPage,
  onSubmit,
  testedTrue,
  testedFalse
})(TrackSymptomsForm);
