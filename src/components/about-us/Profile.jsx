import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Profile = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          src={require(`${props.src}`)}
          alt={props.name}
          className="card-img-top"
        />
      </div>
      <div className="card-body text-dark">
        <p className="card-text">{props.name}</p>
        <a
          href="https://www.linkedin.com/in/yifei-zhang1/"
          target="_blank"
          classname="link"
        ></a>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
    </div>
  );
};

export default Profile;
