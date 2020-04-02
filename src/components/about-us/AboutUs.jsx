import React from "react";
import "./AboutUs.css";
import Profile from "./Profile";
import Disclaimer from "../disclaimer/Disclaimer";
import volunteers from "./Volunteers";

const AboutUs = () => (
  <React.Fragment>
    <Disclaimer />
    <div className="about-us">
      <section>
        <h4 className="title">L'équipe </h4>
        <p className="description">
          Voici les bénévoles extraordinaires qui ont contribué à monter ce
          projet!
        </p>
        <p className="contact">
          Vous pouvez nous joindre au:{" "}
          <a className="emailLink" href="mailto:flattenofficial@gmail.com">
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
                  role={volunteer.role}
                  degrees={volunteer.degrees}
                  titles={volunteer.titles}
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
