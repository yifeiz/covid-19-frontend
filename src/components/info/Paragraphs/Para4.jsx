import React from "react";

import "./Para.css";

const Para4 = () => (
  <React.Fragment>
    <p>
      Si la COVID-19 vous inquiète ou si vous présentez des symptômes comme de
      la toux, de la fièvre ou des difficultés respiratoires, ou d’autres
      symptômes compatibles avec la COVID-19, vous pouvez composer le 514
      644-4545.
    </p>
    <p>
      De plus, si vous avez de la toux, de la fièvre ou des difficultés
      respiratoires ou d’autres symptômes compatibles avec la COVID-19:
      <li>
        ne vous présentez pas dans une clinique médicale sans avoir reçu au
        préalable un rendez-vous;
      </li>
      <li>
        si votre condition le permet, composez le 514-644-4545. Si vous êtes de
        retour d’un voyage depuis moins de 14 jours, précisez-le;
      </li>
      <li>
        rendez-vous à l’urgence seulement si vous avez des difficultés
        respiratoires (difficulté à respirer au repos ou impossibilité de
        respirer en position couchée).
      </li>
    </p>
    <span>Sources: </span>
    <a className="infoLink" target="_blank" href="www.quebec.ca/coronavirus">
      Gouvernement du Québec
    </a>
    <span> et </span>
    <a className="infoLink" target="_blank" href="www.santemontreal.qc.ca">
      Direction de santé publique de Montréal
    </a>
  </React.Fragment>
);

export default Para4;
