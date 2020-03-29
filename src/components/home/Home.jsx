import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./home.css";
import Disclaimer from "../disclaimer/Disclaimer";
import { GoogleLogin } from 'react-google-login';
import { SignIn } from "../../actions/index";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Disclaimer />
        <div className="home">
          <div className="home__left">
            <p className="home__label"></p>
          </div>
          <div className="home__right">
            <div className="home__content">
              <img className="home__logo" src={logo} />
              <p className="home__subtitle">
                FLATTEN is a not-for-profit organization platform for collecting and
                providing real time information regarding the spread of COVID-19 in
                your local community and around the nation.
              </p>
              <Link to={"/track-your-symptoms"}>
                <button className="red-button">
                  Click to fill form and view map to see the spread of COVID
                </button>
              </Link>
              <GoogleLogin
                  className="google-signin-button"
                  clientId="233853318753-ktubm22g6kphmlgguknjdu48vi1dt746.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  disabled={false}
                  isSignedIn={true}
                />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
 responseGoogle = (response) => {
    console.log(response.profileObj);
    if(response.googleId) {
      this.props.SignIn(response.profileObj);
    }
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

export default connect(mapStateToProps, { SignIn })(Home);