import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        COVID-19
      </Link>
      <Link to="/Info" className="item">
        Info
      </Link>
      <Link to="/login" className="item">
        Login
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
