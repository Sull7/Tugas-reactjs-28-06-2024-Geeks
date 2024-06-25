import React, { Component } from "react";
import { Comment, Header } from "semantic-ui-react";
import { faker } from "@faker-js/faker";

class CommentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          avatar: faker.image.avatar(),
          name: "Samsul",
          date: "Yesterday at 02:30AM",
          text: "HAII",
          likes: 0,
        },
        {
          avatar: faker.image.avatar(),
          name: "Erik",
          date: faker.date.recent().toLocaleDateString(),
          text: "Good Game",
          likes: 0,
        },
        {
          avatar: faker.image.avatar(),
          name: "Udin",
          date: "Today at 12:30AM",
          text: "Love Udin",
          likes: 0,
        },
      ],
    };
  }
  tombolClick = (index) => {
    const newComments = [...this.state.comments];
    newComments[index].likes += 1;
    this.setState({ comments: newComments });
  };

  renderComments() {
    return this.state.comments.map((comment, index) => (
      <Comment key={index}>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{comment.name}</Comment.Author>
          <Comment.Metadata>
            <div>
              {comment.date} |
              <Comment.Action>Like {comment.likes}</Comment.Action>
            </div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <Comment.Actions>
            <button onClick={() => this.tombolClick(index)}>Click me</button>
            <br />
            <div
              class="ui labeled button"
              tabindex="0"
              style={{ marginTop: "10px" }}
            >
              <div
                class="ui red button"
                onClick={() => this.tombolClick(index)}
              >
                <i class="heart icon"></i>
              </div>
              <a class="ui basic red left pointing label">{comment.likes}</a>
            </div>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    ));
  }

  render() {
    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {this.renderComments()}
      </Comment.Group>
    );
  }
}

export default CommentExample;
