import React from "react";
import placeholder from "../../assets/placeholder.png";
import "./Profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Profile = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={placeholder} alt="profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <p className="card-text">{props.name}</p>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
    </div>
  );
};

export default Profile;
