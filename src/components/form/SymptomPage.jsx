import React from "react";
import { connect } from "react-redux";

import SymptomForm from "./SymptomForm";
import { submitForm } from "../../actions";

class SymptomPage extends React.Component {
  renderRespose(response) {
    return <div></div>;
  }

  render() {
    return (
      <div>
        <SymptomForm />
        <div>{this.renderResponse(this.props.response)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    response: state.response
  };
};

export default connect(mapStateToProps, { submitForm })(SymptomPage);
