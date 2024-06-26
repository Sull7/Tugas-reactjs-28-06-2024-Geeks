import React, { Component } from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from "./content/nav";
import CommentExample from "./content/Comment";
import Clock from "./content/clock";
import FormInput from "./content/input";
import UnsplashAPI from "./content/UnsplasApi";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App-background">
        <Nav />
        <Container className="container">
          <div style={{ padding: "20px" }}>
            <Clock />
            <CommentExample />
          </div>
          <Grid columns={2} stackable>
            <Grid.Column>
              <FormInput />
            </Grid.Column>
            <GridColumn>
              <UnsplashAPI />
            </GridColumn>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
