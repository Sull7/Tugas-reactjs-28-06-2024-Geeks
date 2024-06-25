import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Nav from "./nav";
import CommentExample from "./Comment";
import Clock from "./clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <div style={{ padding: "20px" }}>
            <Clock />
            <CommentExample />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
