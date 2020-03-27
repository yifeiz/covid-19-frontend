import React from "react";
import "./Sponsors.css";

import Disclaimer from "../disclaimer/Disclaimer";

class Sponsors extends React.Component {
  render() {
    let companies = [
      {
        name: "Google Cloud Logo",
        src: "./company-logos/google-cloud2.png",
        link: "https://cloud.google.com/"
      },
      {
        name: "Vector Institute Logo",
        src: "./company-logos/vector-institute.png",
        link: "https://vectorinstitute.ai/"
      }
    ];

    const description = `FLATTEN is a not-for-profit organization platform for collecting 
    and providing real time information regarding the spread of COVID-19 in your local 
    community and around the nation. Although we cannot yet provide tax reciepts, we are 
    accepting donations and you can contact us at the email below should you be interested.`;

    const disclaimerText = `We are a group of scientists, engineers and clinicians
    who have created an online screening tool to provide information on COVID-19. 
    This app is designed to help increase awareness and flatten the curve of the
    spread of COVID-19 by informing Canadians and healthcare systems of relevant
    information. `;

    return (
      <div className="App">
        <Disclaimer>{disclaimerText}</Disclaimer>
        <section>
          <h1 className="title"> Sponsors </h1>
          <p className="description">{description}</p>
          <p className="contact">
            Contact Us:{" "}
            <a className="emailLink" href="mailto:flattenofficial@gmail.com">
              flattenofficial@gmail.com
            </a>
          </p>
          <hr className="line" />
        </section>
        <section className="sponsor-logos">
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
      </div>
    );
  }
}

export default Sponsors;
