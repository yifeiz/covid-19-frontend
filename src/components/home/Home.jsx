import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./home.css";
import Disclaimer from "../disclaimer/Disclaimer";
import { GoogleLogin } from 'react-google-login';
import { SignIn } from "../../actions/index";

const Home = () => (
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
          <Link to={"/log-your-health"}>
            <button className="red-button">
              Click to fill form and view map to see the spread of COVID
            </button>
          </Link>
          <p className="home__information">
            <i>
              By logging your health on a regular basis, FLATTEN is able to
              identify regions where there are vulnerable, potential, and
              confirmed cases of COVID-19. This information is used for
              healthcare systems to optimize resources and for Canadians to
              understand the importance of social distancing.
            </i>
          </p>
        </div>
      </React.Fragment>
    )
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