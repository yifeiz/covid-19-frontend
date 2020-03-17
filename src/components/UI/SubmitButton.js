import React from "react";
//Adjust this to be a pretty TextInput
class SubmitButton extends React.Component {
  render() {
    return <button>{this.props.identifier}</button>;
  }
}

export default SubmitButton;
