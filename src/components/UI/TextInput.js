import React from "react";
//Adjust this to be a pretty TextInput
class TextInput extends React.Component {
  render() {
    return <input id={"input-form-text-${this.props.identifier}"} placeholder={this.props.identifier}></input>;
  }
}

export default TextInput;
