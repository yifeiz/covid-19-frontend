import React from "react";
import "./Sponsors.css";

import Footer from "../footer/Footer";

class Sponsors extends React.Component {
  render() {
    let companies = [
      {
        name: "Uber",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Google",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Uber",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Google",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Uber",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Google",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Uber",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Google",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Uber",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Google",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Uber",
        src: "./company-logos/google.png",
        link: "google.ca"
      },
      {
        name: "Google",
        src: "./company-logos/google.png",
        link: "google.ca"
      }
    ];

    const description = `This platform would not be possible without having all of our team members 
                         volunteer their hard work towards this project as well as support from the 
                         following organizations.`;

    return (
      <div className="App">
        <section>
          <h1 className="title"> Sponsors </h1>
          <p className="description">{description}</p>
          <hr className="line" />
        </section>
        <section className="profiles">
          <div className="container-fluid d-flex justify-content-center">
            <div className="row company-row">
              {companies.map((company, index) => (
                <div>
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require(`${company.src}`)}
                      alt={company.name}
                      key={index}
                      className="logo"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Sponsors;
