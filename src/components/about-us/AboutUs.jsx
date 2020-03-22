import React from "react";
import "./AboutUs.css";
import volunteers from "./Volunteers"
import Profile from "./Profile";

const AboutUs = () => (
  <div className="App">
    <section>
      <h1 className="title"> About Us </h1>
      <p className="description">
        Here are the amazing volunteers who made this project possible!
      </p>
      <hr className="line" />
    </section>
    <section className="profiles">
      <div className="container-fluid d-flex justify-content-center">
        <div className="row about-us-row">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-5">
              <Profile
                link={volunteer.link}
                name={volunteer.name}
                src={volunteer.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
