import React from "react";
import { connect } from "react-redux";

import SymptomForm from "./SymptomForm";
import { submitForm } from "../../actions";

class SymptomPage extends React.Component {
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
  };

  render() {
    return (
      <div>
        <SymptomForm onSubmit={this.onSubmit} />
        <div>{this.renderResponse(this.props.data)}</div>
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
