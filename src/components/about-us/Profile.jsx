import React from "react";
import placeholder from "../../assets/placeholder.png";
import "./Profile.css";

const Profile = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={placeholder} alt="profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <p className="card-text">Card Title</p>
      </div>
    </div>
  );
};

export default Profile;
