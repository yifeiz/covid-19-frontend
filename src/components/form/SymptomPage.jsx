import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import SymptomForm from "./SymptomForm";
import { submitForm } from "../../actions";
import { SignIn } from "../../actions";
import Disclaimer from "../disclaimer/Disclaimer";
import history from "../../history";

class SymptomPage extends React.Component {
  state = { modalIsOpen: false };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  exitModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    history.push("/info");
  };

  goToHeatMap = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    history.push("/heat-map");
  };

  renderModal() {
    const { submissionStatus } = this.props
      ? this.props
      : { submissionStatus: null };
    const headerText =
      submissionStatus === false
        ? "Something went wrong..."
        : "Thank you for your contribution!";

    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        toggle={this.toggleModal}
        size="lg"
      >
        <ModalHeader toggle={this.toggleModal}>{headerText}</ModalHeader>
        <ModalBody>{this.renderModalBody()}</ModalBody>
        <ModalFooter>{this.renderModalFooter()}</ModalFooter>
      </Modal>
    );
  }

  renderModalBody() {
    const { submissionStatus } = this.props
      ? this.props
      : { submissionStatus: null };
    if (typeof submissionStatus === "boolean") {
      const modalBody = submissionStatus
        ? "Please update the form if you experience any changes in your condition."
        : "Uh oh, the form submission failed. Please refresh the page and try again.";
      return (
        <div style={{ color: "red", fontWeight: "bold" }}>{modalBody}</div>
      );
    } else {
      return (
        <>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div>Your response is being submitted, please wait ...</div>
        </>
      );
    }
  }

  renderModalFooter() {
    const { submissionStatus } = this.props
      ? this.props
      : { submissionStatus: null };

    return (
      <>
        <Button
          color="info"
          onClick={this.exitModal}
          disabled={!submissionStatus}
        >
          More Info
        </Button>
        <Button
          color="success"
          onClick={this.goToHeatMap}
          disabled={!submissionStatus}
        >
          Proceed to Heat Map
        </Button>
      </>
    );
  }

  onSubmit = formValues => {
    this.props.submitForm(formValues, this.props.tokenId);
    this.toggleModal();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Disclaimer />
        <SymptomForm onSubmit={this.onSubmit} />
        {this.renderModal()}
      </>
    );
  }
}

const mapStateToProps = state => {
  let map = {};
  map.submissionStatus = state.HTML ? state.HTML.response : null;
  console.log(map.submissionStatus);

  if (state.account.tokenId) {
    map.tokenId = state.account.tokenId;
  } else {
    map.tokenId = null;
  }
  if (state.HTML) {
    map.data = state.HTML.response;
  }
  return map;
};

export default connect(mapStateToProps, { submitForm, SignIn })(SymptomPage);
