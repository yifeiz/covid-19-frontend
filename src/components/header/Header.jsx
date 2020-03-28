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
  state = { isOpen: false, loggedIn: true };

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
    if (!this.state.loggedIn) {
      return (
        <React.Fragment>
          {this.renderNavItem("/", "Home")}
          {this.renderNavItem("/Info", "Info")}
          {this.renderNavItem("/about-us", "The Team")}
          {this.renderNavItem("/sponsors", "Sponsors")}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {this.renderNavItem("/", "Home")}
        {this.renderNavItem("/Info", "Info")}
        {this.renderNavItem("/track-your-symptoms", "Log Health")}
        {this.renderNavItem("/heat-map", "Heat Map")}

        {this.renderNavItem("/about-us", "The Team")}
        {this.renderNavItem("/sponsors", "Sponsors")}
      </React.Fragment>
    );
  }
  renderNav() {
    return (
      <Navbar color="light" light expand="md">
        <NavLink href="/">
          <img className="header__logo" src={logo} />
        </NavLink>
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

export default Header;
