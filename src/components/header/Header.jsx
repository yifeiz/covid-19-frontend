import React from "react";
import { connect } from "react-redux";
import { NavLink as RRNavLink } from "react-router-dom";
import logo from "../../assets/logo_nav.png";
import ShareButtons from "./Share.jsx";
import { GoogleLogout } from "react-google-login";
import { GoogleLogin } from "react-google-login";
import { SignIn, SignOut } from "../../actions/index";
import "./header.css";

import { OAuth } from "./OAuth.js";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends React.Component {
  state = {
    isOpen: false,
    isLoggedIn: null,
    loading: true,
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = e => {
    this.setState({ windowWidth: window.innerWidth });
  };

  responseGoogle = response => {
    if (response.googleId) {
      console.log("LOGIN");
      this.setState({ isLoggedIn: true });
      this.props.SignIn(response);
    }
  };

  onLogoutSuccess = () => {
    localStorage.removeItem("imageURL");
    this.setState({ isLoggedIn: false });
    this.props.SignOut();
    console.log("Logged out");
  };

  onLogoutFailure = () => {
    console.log("Logout Failed");
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  resetNav = () => {
    this.setState({ isOpen: false });
  };
  renderNavItem(link, name) {
    return (
      <NavItem>
        <NavLink
          className="navlink"
          tag={RRNavLink}
          exact
          to={link}
          activeClassName="active"
          onClick={this.resetNav}
        >
          <h3>{name}</h3>
        </NavLink>
      </NavItem>
    );
  }
  renderNavItems() {
    if (!this.state.isLoggedIn) {
      return (
        <React.Fragment>
          {this.renderNavItem("/", "Home")}
          {this.renderNavItem("/Info", "Info")}
          {this.renderNavItem("/heat-map", "Heat Map")}
          {this.renderNavItem("/about-us", "The Team")}
          {this.renderNavItem("/sponsors", "Sponsors")}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {this.renderNavItem("/", "Home")}
        {this.renderNavItem("/Info", "Info")}
        {this.renderNavItem("/log-your-health", "Log your Health")}
        {this.renderNavItem("/heat-map", "Heat Map")}
        {this.renderNavItem("/about-us", "The Team")}
        {this.renderNavItem("/sponsors", "Sponsors")}
      </React.Fragment>
    );
  }
  renderNav() {
    let loginLogoutButton = null;
    let mobileLogin = null;
    if (this.state.windowWidth < 992 && !this.state.isLoggedIn) {
      //mobile
      mobileLogin = (
        <GoogleLogin
          className="google-signin-button"
          clientId={OAuth()}
          buttonText="Sign in with Google"
          render={renderProps => (
            <button
              type="button"
              class="google-signin-button"
              onClick={renderProps.onClick}
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
                style={{ padding: "10px 10px 10px 0px", fontWeight: "500" }}
              >
                Sign in with Google
              </span>
            </button>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          disabled={false}
          isSignedIn={true}
        />
      );
    }
    if (this.state.isLoggedIn) {
      loginLogoutButton = (
        <GoogleLogout
          clientId={OAuth()}
          render={renderProps => (
            <NavItem className="navlink">
              <NavLink onClick={renderProps.onClick}>
                <h3 style={{ cursor: "pointer" }}>
                  Log Out
                  <img
                    className="react-share__ShareButton share-button"
                    style={{
                      borderRadius: "50%",
                      height: "24px",
                      marginLeft: "10px"
                    }}
                    src={`${localStorage.getItem("imageURL")}`}
                  />
                </h3>
              </NavLink>
            </NavItem>
            // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}
          onLogoutSuccess={this.onLogoutSuccess}
          onFailure={this.onLogoutFailure}
        ></GoogleLogout>
      );
    } else {
      loginLogoutButton = (
        <GoogleLogin
          className="google-signin-button"
          clientId={OAuth()}
          buttonText="Sign in with Google"
          render={renderProps => (
            <button
              type="button"
              class="google-signin-button"
              onClick={renderProps.onClick}
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
                style={{ padding: "10px 10px 10px 0px", fontWeight: "500" }}
              >
                Sign in with Google
              </span>
            </button>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          disabled={false}
          isSignedIn={true}
        />
      );
    }

    return (
      <Navbar color="light" light expand="lg">
        <NavLink href="/">
          <img className="header__logo" src={logo} />
        </NavLink>
        {mobileLogin}
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="nav-fill w-100" navbar>
            {this.renderNavItems()}
            <NavItem className="navlink">
              <NavLink>
                <ShareButtons />
              </NavLink>
            </NavItem>
            {loginLogoutButton}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  render() {
    return <React.Fragment> {this.renderNav()}</React.Fragment>;
  }
}

export default connect(null, { SignIn, SignOut })(Header);
