import React, { Component } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import Para0 from "./Paragraphs/Para0";
import Para1 from "./Paragraphs/Para1";
import Para2 from "./Paragraphs/Para2";
import Para3 from "./Paragraphs/Para3";
import Para4 from "./Paragraphs/Para4";
import Para5 from "./Paragraphs/Para5";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: new Set(),
      cards: [
        "What is a Coronavirus (COVID-19)?",
        "How does COVID-19 spread?",
        "What are the symptoms of COVID-19?",
        "How do I prevent myself and my loved ones from getting COVID-19?",
        "When should I see my family doctor or go to the hospital?",
        "What is social distancing and how do I do it?"
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
      <div className="container">
        {cards.map((elem, index) => {
          return (
            <Card
              style={{
                marginTop: index === 0 ? "3rem" : "auto",
                width: "60%",
                marginBottom: "1rem"
              }}
              key={index}
            >
              <CardHeader
                style={{ borderBottom: "0px" }}
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
                    padding: "1rem"
                  }}
                >
                  {index === 0 && <Para0 />}
                  {index === 1 && <Para1 />}
                  {index === 2 && <Para2 />}
                  {index === 3 && <Para3 />}
                  {index === 4 && <Para4 />}
                  {index === 5 && <Para5 />}
                </CardBody>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default App;