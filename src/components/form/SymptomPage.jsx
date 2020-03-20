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

  renderModal(data) {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        toggle={this.toggleModal}
        size="lg"
      >
        <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
        <ModalBody>{this.renderResponse(data)}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.exitModal}>
            More Info
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
