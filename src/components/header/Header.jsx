import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import logo from "../../assets/logo_nav.png";
import ShareButtons from "./Share.jsx";
import { GoogleLogout } from 'react-google-login';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends React.Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  resetNav = () => {
    this.setState({ isOpen: false });
  };

  logoutSuccess = () => {
    localStorage.removeItem('imageURL');
    console.log('Logged out');
  }

  logoutFailure = () => {
    console.log('Logout Failed');
  }

  renderNav() {
    return (
      <Navbar color="light" light expand="lg">
        <NavLink href="/">
          <img className="header__logo" src={logo} />
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="nav-fill w-100" navbar>
            <NavItem>
              <NavLink
                className="navlink"
                tag={RRNavLink}
                exact
                to="/"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>Home</h3>
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink
                tag={RRNavLink}
                exact
                to="/Info"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>Info</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navlink"
                tag={RRNavLink}
                exact
                to="/track-your-symptoms"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>Track Your Symptoms</h3>
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink
                tag={RRNavLink}
                exact
                to="/about-us"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>The Team</h3>
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink
                tag={RRNavLink}
                exact
                to="/sponsors"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>Sponsors</h3>
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink
                tag={RRNavLink}
                exact
                to="/heat-map"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>Heat Map</h3>
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink>
              <ShareButtons />
              </NavLink>
            </NavItem>
            <GoogleLogout
                  clientId="233853318753-ktubm22g6kphmlgguknjdu48vi1dt746.apps.googleusercontent.com"
                  render={renderProps => (
                    <NavItem className="navlink">
                      <NavLink
                      activeClassName="active"
                      onClick={() => {
                        return renderProps.onClick
                      }}
                      >
                        <h3>
                          Log Out
                          <img className="react-share__ShareButton share-button" style={{ borderRadius: '50%', height: '24px', marginLeft: '10px'}} src={localStorage.getItem('imageURL')}/>
                        </h3>
                      </NavLink>
                    </NavItem>
                    // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                  )}
                  onLogoutSuccess={this.logoutSuccess}
                  onFailure={this.logoutFailure}
                >
                </GoogleLogout>
            
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  render() {
    return <React.Fragment> {this.renderNav()}</React.Fragment>;
  }
}

export default Header;
