import React from "react";

import "./Para.css";

const Para1 = () => (
  <p>
    COVID-19 is believed to be spread most commonly from an infected person
    through:
    <p>
      <li>Respiratory droplets generated when they cough or sneeze</li>
      <li>
        Close, prolonged personal contact such as touching or shaking hands
      </li>
      <li>
        Touching something with the virus on it, then touching your mouth, nose,
        or eyes before washing your hands
      </li>
    </p>
    <span>Source: </span>
    <a
      className="infoLink"
      href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
    >
      Centers for Disease Control and Prevention
    </a>
  </p>
);

export default Para1;
