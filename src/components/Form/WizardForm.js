import React from "react";
import { connect } from "react-redux";

import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";

import { nextPage, previousPage, onSubmit } from "../../actions";

class WizardForm extends React.Component {
  render() {
    const { page } = this.props;

    console.log(page);
    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.props.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.props.previousPage}
            onSubmit={this.props.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
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
    page: state.wizardForm.page
  };
};

export default connect(mapStateToProps, { nextPage, previousPage, onSubmit })(
  WizardForm
);
