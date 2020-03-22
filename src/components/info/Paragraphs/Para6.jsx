import React from "react";

import "./Para.css";

const Para6 = () => (
  <React.Fragment>
    <p>
      While diseases can make anyone sick, some Canadians are more at risk of
      getting an infection and developing severe complications due to their
      health, social and economic circumstances.
    </p>
    <p>
      Vulnerable populations may include anyone who is:
      <ul class="infoList">
        <li>an older adult </li>
        <li>
          has underlying medical conditions (e.g. heart disease, hypertension,
          diabetes, chronic respiratory diseases, cancer)
        </li>
        <li>
          at risk due to a compromised immune system from a medical condition or
          treatment (e.g. chemotherapy)
        </li>
      </ul>
    </p>

    <span>Source: </span>
    <a
      className="infoLink"
      target="_blank"
      href="https://www.canada.ca/en/public-health/services/publications/diseases-conditions/vulnerable-populations-covid-19.html"
    >
      Public Health Agency of Canada
    </a>
  </React.Fragment>
);

export default Para6;
