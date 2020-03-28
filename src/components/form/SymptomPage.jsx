import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import SymptomForm from "./SymptomForm";
import { submitForm } from "../../actions";
import history from "../../history";

class SymptomPage extends React.Component {
  state = { modalIsOpen: false };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  exitModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    history.push("/Info");
  };

  goToHeatMap = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    history.push("/heat-map");
  };

  renderModal(data) {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        toggle={this.toggleModal}
        size="lg"
      >
        <ModalHeader toggle={this.toggleModal}>
          Thank you for your contribution!
        </ModalHeader>
        <ModalBody>{this.renderResponse(data)}</ModalBody>
        {this.renderButtons(data)}
      </Modal>
    );
  }

  renderResponse(data) {
    const modalDescription = (
      <div>
        <h3 style={{ color: "red", fontWeight: "bold" }}>
          Please update the form if you experience any changes in your
          condition.
        </h3>
      </div>
    );

    if (data) {
      return modalDescription;
    }
    return (
      <div>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div>Your response is being submitted, please wait ...</div>
      </div>
    );
  }

  renderButtons(data) {
    let active = false;
    if (data) {
      active = true;
    }
    return (
      <ModalFooter>
        <Button color="info" onClick={this.exitModal} disabled={!active}>
          More Info
        </Button>
        <Button color="success" onClick={this.goToHeatMap} disabled={!active}>
          Proceed to Heat Map
        </Button>
      </ModalFooter>
    );
  }

  onSubmit = formValues => {
    this.props.submitForm(formValues);
    this.toggleModal();
  };

  render() {
    return (
      <div>
        <SymptomForm onSubmit={this.onSubmit} />
        <div>{this.renderModal(this.props.data)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.HTML) {
    return {
      data: state.HTML.response
    };
  }
  return state;
};

export default connect(mapStateToProps, { submitForm })(SymptomPage);
