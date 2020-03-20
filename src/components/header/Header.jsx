import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
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

  renderNav() {
    return (
      <Navbar color="light" light expand="md">
        <NavLink href="/">
          <h2>Flatten</h2>
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className="navlink"
                tag={RRNavLink}
                exact
                to="/"
                activeClassName="active"
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
              >
                <h3>Track Your Symptoms</h3>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/about-us"
                activeClassName="active"
              >
                <h3>About Us</h3>
              </NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink
                tag={RRNavLink}
                exact
                to="/heat-map"
                activeClassName="active"
              >
                <h3>Heat Map</h3>
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
