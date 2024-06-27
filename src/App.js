import React, { Component } from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Importan Conten
import Nav from "./content/nav";
import CommentExample from "./content/Comment";
import Clock from "./content/clock";
import FormInput from "./content/input";
import UnsplashAPI from "./content/UnsplasApi";
import YouTubeAPI from "./content/youtubeApi";

class App extends Component {
  render() {
    return (
      <div className="App-background">
        <Nav />
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
        <div>Ceritanya INI FOOTER</div>
      </div>
    );
  }
}

export default App;
