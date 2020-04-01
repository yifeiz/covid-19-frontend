import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Row, Col, Container } from "reactstrap";
import Recaptcha from "react-recaptcha";

import { validate } from "./SymptomFormUtils";
import {
  FORM_HEADER,
  FORM_QUESTIONS,
  FORM_POSTAL_CODE_QUESTION
} from "./SymptomFormConstants";
import image from "../../assets/science.png";
import "./SymptomForm.css";
import Box from "@material-ui/core/Box";
import { PostalTextField, RadioButton } from "./SymptomFormFields";

const SymptomForm = props => {
  const [isVerified, setIsVerified] = useState(false);

  const recaptchaLoaded = () => {
    //console.log("Loaded");
  };

  const recaptchaExpired = () => {
    setIsVerified(false);
  };

  const verifyCallback = response => {
    if (response) {
      setIsVerified(true);
      props.change("reactVerification", response);
    }
  };

  const TextInput = ({ input, label, meta }) => {
    return (
      <div className="hidden">
        <label> {label} </label>
        <input {...input} />
      </div>
    );
  };
  const renderQuestions = questions => {
    return questions.map(question => {
      const label = `q${questions.indexOf(question) + 1}`;

      return (
        <tr key={label}>
          <td>
            <p className="question">{question}</p>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field
                name={label}
                radioValue="y"
                component={RadioButton}
              ></Field>
            </Box>
          </td>
          <td className="answer">
            <Box display="flex" justifyContent="center">
              <Field
                name={label}
                radioValue="n"
                component={RadioButton}
              ></Field>
            </Box>
          </td>
        </tr>
      );
    });
  };

  const FORM_DISCLAIMER = (
    <React.Fragment>
      <p>
        Vos réponses seront colligées et rendues publiques, notamment sur notre
        site internet. Les informations que vous fournirez auront pour but
        d’aider les intervenants du réseau de la santé, les chercheurs, ainsi
        que d’autres parties prenantes à évaluer la propagation de la COVID-19,
        ainsi qu’à ajuster les efforts visant à protéger votre santé, celle de
        votre famille, et de votre collectivité.{" "}
        <b>
          Nous agirons en toute bonne foi afin de nous assurer que vos réponses
          sont partagées sous forme agrégée, tel qu’illustré sur la
          représentation graphique dans le menu ci-haut
        </b>
        . Le questionnaire qui suit a été conçu afin de recueillir des données
        sur les facteurs de risque pour la COVID-19. Les questions s’appuient
        sur le meilleur encadrement fourni par les agences de santé publique
        canadiennes, ainsi que par les autres parties prenantes du milieu, et
        elles seront mises à jour régulièrement. Ce sondage n’a pas pour but de
        faciliter le diagnostic, ni de servir d’auto-évaluation pour la
        COVID-19. Si vous soupçonnez être atteint de la COVID-19, veuillez vous
        adresser à un professionnel de la santé. Veuillez lire attentivement
        notre{" "}
        <a href="https://drive.google.com/open?id=1dbkrOLBBp_yqus-oeQ_JXdanDbdb8u-6">
          Politique de confidentialité
        </a>
        , ainsi que nos{" "}
        <a href="https://drive.google.com/open?id=1Cb9yb1zFXrQs0TKIAytx-16vCuHpJBDc">
          Conditions d’utilisation
        </a>
        , et si vous ne consentez pas à nos{" "}
        <a href="https://drive.google.com/open?id=1Cb9yb1zFXrQs0TKIAytx-16vCuHpJBDc">
          Conditions d’utilisation
        </a>
        , ou que vous n’êtes pas à l’aise avec nos méthodes de compilation,
        d’utilisation ou de divulgation de l’information que vous fournirez, ne
        répondez pas au sondage. (Par contre, nous apprécierions si vous nous
        fassiez parvenir vos commentaires à&nbsp;
        <a href="mailto:flattenofficial@gmail.com">flattenofficial@gmail.com</a>
        , afin que nous puissions répondre à vos préoccupations).
      </p>
      <p style={{ fontStyle: "Normal", fontWeight: "Bold" }}>
        Veuillez compléter ce formulaire, même si vous n’avez aucun symptôme.
      </p>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="form__padding">
        <Container fluid>
          <Row>
            <Col md="10">
              <h4 className="header">{FORM_HEADER}</h4>
              <div className="form-disclaimer">{FORM_DISCLAIMER}</div>
            </Col>
            <Col md="2" className="frame">
              <img
                className="microscope-icon"
                src={image}
                alt="Microscope Icon"
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <form
                onSubmit={props.handleSubmit(props.onSubmit)}
                className="ui form error"
              >
                <Table responsive>
                  <thead>
                    <tr>
                      <th className="answer">Question</th>
                      <th className="answer">Yes</th>
                      <th className="answer">No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderQuestions(FORM_QUESTIONS)}
                    <tr key="postal-code">
                      <td>
                        <p className="question">{FORM_POSTAL_CODE_QUESTION}</p>
                      </td>
                      <td colSpan="2">
                        <Field name="postalCode" component={PostalTextField} />
                        <Field
                          component={TextInput}
                          name="reactVerification"
                          type="hidden"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="captcha">
                  <Recaptcha
                    sitekey="6LfuVOIUAAAAAOPSfeWxh-Juu9_gJQ_cEu3mRitY"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifyCallback}
                    expiredCallback={recaptchaExpired}
                  />
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  By submitting account, you certify you are at least age of the
                  majority in your province/territory and agree to Flattens
                  Terms of Use and Privacy policy. If you do not feel
                  comfortable with this, please do not submit.
                </div>
                <div className="submit">
                  <button
                    className="submit-button red-button"
                    disabled={!isVerified}
                  >
                    Submit
                  </button>
                  {!isVerified && (
                    <div className="error">
                      Please make sure to fill out all of the questions above.
                    </div>
                  )}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const formWrapped = reduxForm({
  form: "SymptomForm",
  validate
})(SymptomForm);

export default connect(null)(formWrapped);
