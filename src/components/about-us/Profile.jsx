import React from "react";
import "./Profile.css";

const Profile = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <a href="https://www.linkedin.com/in/yifei-zhang1/">
          <img
            src={require(`${props.src}`)}
            alt={props.name}
            className="card-img-top"
          />
        </a>
      </div>
      <div className="card-body text-dark">
        <p className="card-text">{props.name}</p>
      </div>
    </div>
  );
};

export default Profile;
