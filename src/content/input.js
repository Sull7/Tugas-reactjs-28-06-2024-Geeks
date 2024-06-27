import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import "../App.css"; // Import CSS file

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name, email, phone } = this.state;
    alert(`HALOO\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="form-container">
        <Form onSubmit={this.handleSubmit}>
          <h1>Form Input</h1>
          <Form.Input
            label="Name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Phone"
            placeholder="Enter your phone number"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <Button inverted color="green" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormInput;
