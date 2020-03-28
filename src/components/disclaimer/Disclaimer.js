import React from "react";

import "./Disclaimer.css";

const Disclaimer = () => (
  <div className="Disclaimer">
    <div>
      We are a group of scientists, engineers and clinicians who have created an
      online screening tool to provide information on COVID-19. This app is
      designed to help increase awareness and flatten the curve of the spread of
      COVID-19 by informing Canadians and healthcare systems of relevant
      information. Should you have any concerns, please review our
    </div>
    <a href="https://drive.google.com/open?id=1dbkrOLBBp_yqus-oeQ_JXdanDbdb8u-6">
      Privacy Policy{" "}
    </a>
    and
    <a href="https://drive.google.com/open?id=1Cb9yb1zFXrQs0TKIAytx-16vCuHpJBDc">
      {" "}
      Terms of Service
    </a>
  </div>
);

export default Disclaimer;
