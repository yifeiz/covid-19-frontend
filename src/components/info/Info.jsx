import React, { Component } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import Para0 from "./Paragraphs/Para0";
import Para1 from "./Paragraphs/Para1";
import Para2 from "./Paragraphs/Para2";
import Para3 from "./Paragraphs/Para3";
import Para4 from "./Paragraphs/Para4";
import Para5 from "./Paragraphs/Para5";
import "./Info.css";
import Disclaimer from "../disclaimer/Disclaimer";
import Para6 from "./Paragraphs/Para6";
import Para7 from "./Paragraphs/Para7";
import Para8 from "./Paragraphs/Para8";
import Para9 from "./Paragraphs/Para9";
import Para10 from "./Paragraphs/Para10";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      cards: [
        "What is a Coronavirus (COVID-19)?",
        "Comment la COVID-19 se propage-t-elle?",
        "What are the symptoms of COVID-19?",
        "How do I prevent myself and my loved ones from getting COVID-19?",
        "When should I see my family doctor or go to the hospital?",
        "What is social distancing and how do I do it?",
        `What makes a citizen "Vulnerable"?`,
        `What makes a citizen a "Potential Case"?`,
        `What makes a citizen a "Confirmed Case"?`,
        "What public health/medical expertise does our team have?",
        `External Resources`
      ]
    };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    const newCollapse = new Set(this.state.collapse);
    const index = Number(event);
    newCollapse.has(index) ? newCollapse.delete(index) : newCollapse.add(index);
    this.setState({
      collapse: newCollapse
    });
  }
  render() {
    const { cards, collapse } = this.state;
    return (
      <React.Fragment>
        <Disclaimer />
        <div className="info__container">
          <h4 className="info__title">Frequently Asked Questions</h4>
          {cards.map((elem, index) => {
            return (
              <Card
                style={{
                  marginBottom: "1rem"
                }}
                key={index}
              >
                <CardHeader
                  style={{
                    fontWeight: "bold",
                    borderBottom: "0px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "2px",
                    fontFamily: "Open Sans"
                  }}
                  onClick={this.toggle}
                  data-event={index}
                >
                  {cards[index]}
                </CardHeader>
                <Collapse isOpen={collapse.has(index)}>
                  <CardBody
                    style={{
                      marginTop: "0rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      padding: "1rem",
                      fontFamily: "Open Sans"
                    }}
                  >
                    {index === 0 && <Para0 />}
                    {index === 1 && <Para1 />}
                    {index === 2 && <Para2 />}
                    {index === 3 && <Para3 />}
                    {index === 4 && <Para4 />}
                    {index === 5 && <Para5 />}
                    {index === 6 && <Para6 />}
                    {index === 7 && <Para7 />}
                    {index === 8 && <Para8 />}
                    {index === 9 && <Para9 />}
                    {index === 10 && <Para10 />}
                  </CardBody>
                </Collapse>
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
