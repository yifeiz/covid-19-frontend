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
        link: "https://cifar.ca"
      }
    ];

    const description = `FLATTEN is a not-for-profit organization platform for collecting 
    and providing real time information regarding the spread of COVID-19 in your local 
    community and around the nation. Although we cannot yet provide tax reciepts, we are 
    accepting donations and you can contact us at the email below should you be interested.`;

    return (
      <div className="App">
        <Disclaimer />
        <section>
          <h4 className="sponsors__title">Supporters</h4>
          <p className="description">{description}</p>
          <p className="contact">
            Contact Us:{" "}
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
