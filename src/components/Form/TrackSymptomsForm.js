import React from "react";
import { connect } from "react-redux";

import NameForm from "./NameForm.js";

import { nextPage, previousPage, onSubmit } from "../../actions";
import ContactForm from "./ContactForm.js";
import MedicalHistory from "./MedicalHistory";

class TrackSymptomsForm extends React.Component {
  render() {
    const { page } = this.props;

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
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    page: state.trackSymptomsForm.page
  };
};

export default connect(mapStateToProps, { nextPage, previousPage, onSubmit })(
  TrackSymptomsForm
);
