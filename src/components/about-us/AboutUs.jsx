import React from "react";
import "./AboutUs.css";
import Profile from "./Profile";
import Disclaimer from "../disclaimer/Disclaimer";
import volunteers from "./Volunteers";

let disclaimerText = `We are a group of scientists, engineers and clinicians
  who have created an online screening tool to provide information on COVID-19. 
  This app is designed to help increase awareness and flatten the curve of the
  spread of COVID-19 by informing Canadians and healthcare systems of relevant
  information.`;

const AboutUs = () => (
  <React.Fragment>
    <Disclaimer>{disclaimerText}</Disclaimer>
    <div className="about-us">
      <section>
        <h4 className="title"> The Team </h4>
        <p className="description">
          Here are the amazing volunteers who made this project possible!
        </p>
        <p className="contact">
          Contact Us:{" "}
          <a className="infoLink" href="mailto:flattenofficial@gmail.com">
            flattenofficial@gmail.com
          </a>
        </p>
        <hr className="line" />
      </section>
      <section className="profiles">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row about-us-row">
            {volunteers.map((volunteer, index) => (
              <div className="col-lg-3 col-md-4 col-sm-5">
                <Profile
                  link={volunteer.link}
                  name={volunteer.name}
                  src={volunteer.src}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </React.Fragment>
);

export default AboutUs;
