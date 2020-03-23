import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

import { readCookie } from "../../actions";
import "./heatmap.css";
import history from "../../history";
class HeatMap extends React.Component {
  state = {
    width: 0,
    height: 0,
    ratio: 190
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
    history.push("/");
  };

  renderModal = cookieExists => {
    return (
      <Modal isOpen={false} size="xl" centered>
        <ModalHeader className="header-container">
          Please fill out our form to access this page
        </ModalHeader>
        <ModalFooter className="button-container">
          <Button color="primary" onClick={this.goToHeatMap}>
            Take me to the form
          </Button>
          <Button color="secondary" onClick={this.goHome}>
            Bring me to the home page
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  render() {
    const ratio = `${this.state.ratio}%`;
    return (
      <div className="iframe-container" style={{ paddingTop: ratio }}>
        <iframe src="https://flatten-271620.web.app/">
          Sorry, the heat-map did not load.
        </iframe>
        {this.renderModal(this.props.cookieExists)}
      </div>
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
