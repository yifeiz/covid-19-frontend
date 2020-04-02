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
        ? "Quelque chose a mal tourné..."
        : "Merci pour votre contribution!";

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
        ? "Veuillez mettre à jour le formulaire si vous constatez un changement dans les symptômes.."
        : "La soumission du formulaire a échoué. Veuillez rafraîchir la page et réessayer";
      return (
        <div style={{ color: "red", fontWeight: "bold" }}>{modalBody}</div>
      );
    } else {
      return (
        <>
          <div class="spinner-border" role="status">
            <span class="sr-only">Chargement...</span>
          </div>
          <div>Votre réponse est en cours d'envoi, veuillez patienter ...</div>
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
          Informations
        </Button>
        <Button
          color="success"
          onClick={this.goToHeatMap}
          disabled={!submissionStatus}
        >
          Aller à la carte
        </Button>
      </>
    );
  }

  onSubmit = formValues => {
    this.props.submitForm(formValues, this.props.tokenId);
    this.toggleModal();
  };

  render() {
    return (
      <React.Fragment>
        <Disclaimer />

        <SymptomForm onSubmit={this.onSubmit} tokenId={this.props.tokenId} />
        <div>{this.renderModal()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  let map = {};
  map.submissionStatus = state.HTML ? state.HTML.response : null;

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
