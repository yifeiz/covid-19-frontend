import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import SymptomForm from "./SymptomForm";
import { submitForm } from "../../actions";
import Disclaimer from "../disclaimer/Disclaimer";
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
          Merci pour votre contribution!
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
          Veuillez mettre à jour le formulaire si vous constatez un changement
          dans les symptômes..
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
        <div>Votre réponse est en cours d'envoi, veuillez patienter ...</div>
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
          Informations
        </Button>
        <Button color="success" onClick={this.goToHeatMap} disabled={!active}>
          Aller à la carte
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
        <Disclaimer />

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
