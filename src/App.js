import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/style.css";

// Importan Conten
import Nav from "./views/nav";
import CommentExample from "./views/Comment";
import Clock from "./views/clock";
import FormInput from "./views/input";
import UnsplashAPI from "./views/unsplash";
import YouTubeAPI from "./views/YoutubeSearch";
import NumberDisplay from "./views/number";
class App extends Component {
  render() {
    return (
      <div className="App-background">
        <Nav />
        <NumberDisplay />
        <Container className="container">
          <Grid columns={2} stackable>
            <Grid.Column>
              <Clock />
              <CommentExample />
            </Grid.Column>
            <Grid.Column>
              <FormInput />
            </Grid.Column>
          </Grid>
          <div className="unsplash-container">
            <UnsplashAPI />
          </div>
          <YouTubeAPI />
        </Container>
      </div>
    );
  }
}

export default App;
