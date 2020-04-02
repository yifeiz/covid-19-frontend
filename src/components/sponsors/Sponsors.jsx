import React from "react";
import "./Sponsors.css";

import Disclaimer from "../disclaimer/Disclaimer";

class Sponsors extends React.Component {
  render() {
    let companies = [
      {
        name: "Google Cloud",
        link: "https://cloud.google.com/"
      },
      {
        name: "Vector Institute",
        link: "https://vectorinstitute.ai/"
      },
      {
        name: "CIFAR",
        link: "https://www.cifar.ca/fr/"
      }
    ];

    const description = `Flatten est une plateforme pour organismes sans
    but lucratif qui collige des renseignements en temps réel au sujet
    de la propagation de la COVID-19 localement et partout au pays.. 
    Nous ne sommes pas encore en mesure d’émettre des reçus pour fins
    d’impôt, mais nous acceptons des dons. Communiquez avec nous si
    vous souhaitez soutenir notre cause.`;

    return (
      <div className="App">
        <Disclaimer />
        <section>
          <h4 className="sponsors__title">Soutenir la cause</h4>
          <p className="description">{description}</p>
          <p className="contact">
            Nous joindre:{" "}
            <a className="emailLink" href="mailto:flattenofficial@gmail.com">
              flattenofficial@gmail.com
            </a>
          </p>
          <hr className="line" />
        </section>
        <div className="container-fluid justify-content-center">
          {companies.map((company, index) => (
            <div
              key={index}
              style={{ textAlign: "center", fontSize: "1.5rem" }}
            >
              <a href={company.link} target="_blank" rel="noopener noreferrer">
                {company.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sponsors;
