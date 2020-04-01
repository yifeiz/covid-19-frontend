import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { readCookie } from "../../actions";
import DisclaimerMap from "../disclaimer/DisclaimerMap";
import "./heatmap.css";
import history from "../../history";
class HeatMap extends React.Component {
  state = {
    width: 0,
    height: 0,
    ratio: 190,
    modalIsOpen: true
  };

  componentDidMount() {
    this.props.readCookie();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: Math.floor((window.innerHeight / window.innerWidth) * 100)
      });
    } else {
      this.setState({ ratio: 56.25 });
    }
  };

  goToHeatMap = () => {
    history.push("/track-your-symptoms");
  };

  goHome = () => {
    this.setState({ modalIsOpen: false });
  };

  renderModal = cookieExists => {
    return (
      <Modal
        isOpen={!cookieExists && this.state.modalIsOpen}
        size="xl"
        centered
      >
        <ModalHeader>Avez-vous complété votre formulaire?</ModalHeader>
        <ModalBody>
          Nous apprécierions que vous complétiez le formulaire si ce n’est pas
          déjà fait. Merci!
        </ModalBody>
        <ModalFooter className="button-container">
          <Button color="primary" onClick={this.goToHeatMap}>
            Aller au formulaire
          </Button>
          <Button color="secondary" onClick={this.goHome}>
            Aller à la carte
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  render() {
    const ratio = `${this.state.ratio}%`;
    return (
      <React.Fragment>
        <DisclaimerMap />
        <div className="iframe-container" style={{ paddingTop: ratio }}>
          <iframe src="https://flatten-271620.web.app/">
            Désolé, la la représentation graphique n'a pas été chargée.
          </iframe>
          {this.renderModal(this.props.cookieExists)}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.cookieExists) {
    return {
      cookieExists: state.cookieExists.exists
    };
  }
  return {
    cookieExists: false
  };
};

export default connect(mapStateToProps, { readCookie })(HeatMap);
