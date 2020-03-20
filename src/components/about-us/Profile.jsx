import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Table, Container, Row, Col } from "reactstrap";

import placeholder from "../../assets/placeholder.png";
import "./Profile.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="card-container">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Profile Picture"
            height="140"
            image={placeholder}
            title="Profile Picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
