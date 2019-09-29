import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import FlexColumn from "../components/FlexColumn";
import BookCard from "../components/BookCard";

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: [],
      socket: props.socket
    };
  }

  componentDidMount() {
    API.getSavedBooks().then(response => {
      this.setState({ savedBooks: response.data });
    });
  }

  handleDelete = (index, title) => {
    var dbId = this.state.savedBooks[index]._id;
    API.deleteBook(dbId).then(response => {
      var reducedArray = this.state.savedBooks.filter((item, i) => i !== index);
      this.setState({ savedBooks: reducedArray });
    });
    this.state.socket.emit("delete", "a user just deleted the book: " + title);
  };

  render() {
    return (
      <Container>
        <FlexColumn>
          {this.state.savedBooks.map((item, index) => {
            return (
              <BookCard
                key={item._id}
                dbId={item._id}
                title={item.title}
                description={item.description}
                publishedDate={item.publishedDate}
                link={item.previewLink}
                authors={item.authors}
                image={item.image}
                index={index}
                buttonText={"Delete"}
                clickFunction={this.handleDelete}
              ></BookCard>
            );
          })}
        </FlexColumn>
      </Container>
    );
  }
}

export default Save;
