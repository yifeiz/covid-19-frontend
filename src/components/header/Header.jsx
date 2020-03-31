import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import logo from "../../assets/logo_nav.png";
import ShareButtons from "./Share.jsx";
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

  renderNav() {
    return (
      <Navbar color="light" light expand="md">
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
                to="/supporters"
                activeClassName="active"
                onClick={this.resetNav}
              >
                <h3>Supporters</h3>
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
