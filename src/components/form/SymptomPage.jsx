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
    const modalDescription = (
      <p>
        Your answers are collected <strong>anonymously</strong>, and will be
        aggregated to help healthcare providers gauge the spread of COVID-19.
        The following questionnaire is designed to help assess your risk factors
        for COVID-19 infection to inform healthcare systems on guidance on how
        to keep yourself, your family, and your community healthy through the
        preparation allocation of resources are conducted in the most efficient
        manner. The questions are based on the best available guidance from
        Canadian public health agencies and other stakeholders, and will be
        updated regularly. You cannot be diagnosed with COVID simply by taking
        this survey online. If you are experiencing severe symptoms, seek
        medical attention.
      </p>
    );

    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        toggle={this.toggleModal}
        size="lg"
      >
        <ModalHeader toggle={this.toggleModal}>
          Thank you for your contribution!
        </ModalHeader>
        <ModalBody>{modalDescription}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.exitModal}>
            More Info
          </Button>
          <Button color="primary" onClick={this.goToHeatMap}>
            View Heat Map
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  renderResponse(data) {
    if (data) {
      const response = data.response;
      console.log(response);

      return response.map(display => {
        return this.renderHTML(display);
      });
    }
    return;
  }

  renderHTML(list) {
    switch (list[0]) {
      case "p":
        return <div>{list[1]}</div>;
      case "a":
        return <a href={list[2]}>{list[1]}</a>;
      case "l":
        return (
          <ul>
            {list[1].map(li => {
              return <li>{this.renderHTML(li)}</li>;
            })}
          </ul>
        );
    }
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
