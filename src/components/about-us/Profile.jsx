import React from "react";
import "./Profile.css";

const Profile = ({ link, src, name }) => (
  <div className="card text-center">
    <div className="overflow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={require(`${src || './Headshots/default.png'}`)}
          alt={name}
          className="card-img-top"
        />
      </a>
    </div>
    <div className="card-body text-dark">
      <p className="card-text">{name}</p>
    </div>
  </div>
);

export default Profile;
