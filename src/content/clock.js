import React, { Component } from "react";

// Memunculkan waktu
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
