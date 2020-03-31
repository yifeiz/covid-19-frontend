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
    if (!this.props.tokenId) {
      return (
        <React.Fragment>
          {this.renderNavItem("/log-your-health", "Log your Health")}
          {this.renderNavItem("/heat-map", "Heat Map")}
          {this.renderNavItem("/Info", "Info")}
          {this.renderNavItem("/about-us", "The Team")}
          {this.renderNavItem("/sponsors", "Sponsors")}
          {this.renderNavItem("/", "Login")}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {this.renderNavItem("/log-your-health", "Log your Health")}
        {this.renderNavItem("/heat-map", "Heat Map")}
        {this.renderNavItem("/Info", "Info")}
        {this.renderNavItem("/about-us", "The Team")}
        {this.renderNavItem("/sponsors", "Sponsors")}
      </React.Fragment>
    );
  }
  renderNav() {
    let loginLogoutButton = null;
    if (this.props.tokenId) {
      loginLogoutButton = (
        <NavItem>
          <GoogleLogout
            clientId={OAuth()}
            render={renderProps => (
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
            )}
            onLogoutSuccess={this.onLogoutSuccess}
            onFailure={this.onLogoutFailure}
          ></GoogleLogout>
        </NavItem>
      );
    } else {
      loginLogoutButton = (
        <GoogleLogin
          className="google-disabled"
          clientId={OAuth()}
          buttonText="Sign in with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          disabled={!this.state.consent}
          isSignedIn={true}
        />
      );
    }

    return (
      <Navbar color="light" light expand="lg">
        <NavLink href="/">
          <img className="header__logo" src={logo} />
        </NavLink>
        <div class="d-flex order-lg-1 ml-auto pr-2">
          <ul class="navbar-nav flex-row">{loginLogoutButton}</ul>
        </div>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="nav-fill w-100" navbar>
            {this.renderNavItems()}
            <NavItem className="navlink">
              <NavLink>
                <ShareButtons />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  render() {
    return <React.Fragment> {this.renderNav()}</React.Fragment>;
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

export default connect(mapStateToProps, { SignIn, SignOut })(Header);
