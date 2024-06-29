import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Image, Segment } from "semantic-ui-react";
// import tan file
import "../App.css";
import CommentExample from "./Comment";

class YouTubeAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      submittedQuery: "",
      videos: [],
      selectedVideo: null,
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { query } = this.state;
    const apiKey = "AIzaSyA6D0OD8HE6xTWfxrDu4oAviQEXGC57hL0";
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 5,
            q: query,
            key: apiKey,
          },
        }
      );

      const videos = response.data.items;
      this.setState({
        submittedQuery: query,
        videos: videos,
        selectedVideo: videos[0],
      });
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
    }
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { query, submittedQuery, videos, selectedVideo } = this.state;

    return (
      <div className="youtube-container">
        <h3>YOUTUBE FO YOU 🚀</h3>
        <Form onSubmit={this.handleSubmit} className="search-form">
          <Input
            placeholder="Serch.."
            value={query}
            onChange={this.handleChange}
            action={{
              color: "green",
              icon: "search",
              onClick: this.handleSubmit,
            }}
          />
        </Form>

        {/* KOTAK VIDEO */}
        {selectedVideo && (
          <div className="video-display-container">
            <Segment className="video-segment">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                frameBorder="0"
                allowFullScreen
                title="Selected Video"
                style={{ borderRadius: "8px" }}
              />
              <h3>{selectedVideo.snippet.title}</h3>
              <CommentExample />
            </Segment>

            {/* LIST VIDEO */}
            <div className="video-list">
              <h3>Pencarian Untuk"{submittedQuery}"</h3>
              {videos.map((video) => (
                <div
                  key={video.id.videoId}
                  className="video-item"
                  onClick={() => this.handleVideoSelect(video)}
                >
                  <Image
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    style={{
                      cursor: "pointer",
                      width: "180px",
                      height: "100px",
                      marginBottom: "10px",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="video-info">
                    <p className="video-title">{video.snippet.title}</p>
                    <p className="video-channel">
                      {video.snippet.channelTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default YouTubeAPI;
