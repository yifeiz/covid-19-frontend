import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { OAuth } from "../header/OAuth.js";

import logo from "../../assets/logo.png";
import "./home.css";
import Disclaimer from "../disclaimer/Disclaimer";
import { SignIn } from "../../actions";

class Home extends React.Component {
  state = { consent: false };
  responseGoogle = response => {
    if (response.googleId) {
      console.log("LOGIN");
      this.props.SignIn(response);
    }
  };

  onLogoutSuccess = () => {
    localStorage.removeItem("imageURL");
    this.props.SignOut();
    console.log("Logged out");
  };

  onLogoutFailure = () => {
    console.log("Logout Failed");
  };

  renderLogin(status) {
    console.log(status);
    if (status) {
      return (
        <Link to={"/log-your-health"}>
          <button className="red-button">
            Cliquez sur le formulaire et suivez la propagation de la COVID-19{" "}
          </button>
        </Link>
      );
    }
    return (
      <div>
        <label>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.consent}
            onChange={() => {
              this.setState({ consent: !this.state.consent });
            }}
          />
          Cochez pour confirmer que vous acceptez notre politique de
          confidentialité et Conditions d’utilisation
        </label>
        <br />
        <GoogleLogin
          className="google-signin-button"
          clientId={OAuth()}
          buttonText="Se connecter à l'aide de Google"
          render={renderProps => (
            <button
              type="button"
              class="google-signin-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <div
                style={{
                  marginRight: "8px",
                  marginLeft: "10px",
                  marginBottom: "5px",
                  background: "rgb(255, 255, 255)",
                  padding: "2px",
                  borderRadius: "2px"
                }}
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#000" fill-rule="evenodd">
                    <path
                      d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                      fill="#34A853"
                    ></path>
                    <path fill="none" d="M0 0h18v18H0z"></path>
                  </g>
                </svg>
              </div>
              <span
                style={{
                  padding: "10px 10px 10px 0px",
                  fontWeight: "500"
                }}
              >
                Se connecter à l'aide de Google
              </span>
            </button>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          disabled={!this.state.consent}
          isSignedIn={true}
        />
      </div>
    );
  }

  render() {
    console.log(this.props);
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
                FLATTEN est une plateforme pour organismes sans but lucratif qui
                collige des renseignements en temps réel au sujet de la
                propagation de la COVID-19 localement et partout au pays.{" "}
              </p>
              {this.renderLogin(this.props.tokenId)}
              {!this.props.tokenId && (
                <Link to={"/log-your-health"}>
                  <button className="button-anon">
                    ou, continuer sans se connecter
                  </button>
                </Link>
              )}
              <p className="home__information">
                <i>
                  En enregistrant régulièrement votre état de santé, FLATTEN
                  peut identifier les régions où il existe des zones
                  vulnérables, potentielles et cas confirmés de COVID-19. Ces
                  informations sont utilisées pour systèmes de santé pour
                  optimiser les ressources et pour les Canadiens comprendre
                  l'importance de l'éloignement social.
                </i>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  let map = {};

  if (state.account.tokenId) {
    map.tokenId = state.account.tokenId;
  } else {
    map.tokenId = null;
  }
  return map;
};

export default connect(mapStateToProps, { SignIn })(Home);
