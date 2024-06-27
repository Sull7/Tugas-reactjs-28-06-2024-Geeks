import React, { Component } from "react";
import axios from "axios";
import { Form, Input } from "semantic-ui-react";

import "../App.css";
class UnsplashAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      photos: [],
      submittedQuery: "",
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { query } = this.state;
    const accessKey = "l5YKAwkcxsjU5CO6kHtVPHmwiN8piIaPj5lwxaa3Elc";

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query },
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );

      this.setState({ photos: response.data.results, submittedQuery: query });
    } catch (error) {
      console.error("Error fetching data from Unsplash API:", error);
    }
  };

  render() {
    const { query, photos, submittedQuery } = this.state;

    return (
      <div className="form-container-u">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Pencarian Gambar</label>
            <Input
              placeholder="Enter search term"
              value={query}
              onChange={this.handleChange}
              action={{
                color: "green",
                icon: "search",
                onClick: this.handleSubmit,
              }}
            />
          </Form.Field>
        </Form>

        {submittedQuery && (
          <div style={{ marginTop: "20px" }}>
            <h3>Results Untuk "{submittedQuery}"</h3>
            <div className="grid-container">
              {photos.map((photo) => (
                <div key={photo.id} className="grid-item">
                  <img src={photo.urls.thumb} alt={photo.alt_description} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UnsplashAPI;
