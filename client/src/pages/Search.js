import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import FlexRow from "../components/FlexRow";
import SearchField from "../components/SearchField";
import LightButton from "../components/LightButton";
import FlexColumn from "../components/FlexColumn";
import BookCard from "../components/BookCard";
import moment from "moment";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      author: "",
      title: "",
      socket: props.socket
    };
  }

  handleSubmit = () => {
    console.log(this.state.title, this.state.author);
    //format the title
    var title = this.state.title
      .trim()
      .split(" ")
      .join("%20");
    var author = this.state.author
      .trim()
      .split(" ")
      .join("%20");
    if (title && author) {
      console.log("both");
      API.searchByTitleAndAuthor(title, author).then(response => {
        console.log(response.data.items);
        this.setState({ searchResults: response.data.items });
      });
    } else if (title) {
      console.log("just title");
      API.searchByTitle(title).then(response => {
        console.log(response.data.items);
        this.setState({ searchResults: response.data.items });
      });
    } else if (author) {
      console.log("just author");
      API.searchByAuthor(author).then(response => {
        console.log(response.data);
        this.setState({ searchResults: response.data.items });
      });
    } else {
      console.log("hmmm. You should probably check.");
    }
  };

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleItemSave = (index, title) => {
    var item = this.state.searchResults[index];
    var bookObj = {
      title: item.volumeInfo.title,
      description: item.volumeInfo.description
        ? item.volumeInfo.description
        : "Well that's embarassing. This result has no description. You can try following the link to get a description.",
      publishedDate: item.volumeInfo.publishedDate
        .split("-")
        .reverse()
        .join("/"),
      link: item.volumeInfo.previewLink,
      authors: item.volumeInfo.authors.join(", "),
      image: item.volumeInfo.imageLinks.smallThumbnail
    };
    API.saveBook(bookObj).then(response => {
      var reducedArray = this.state.searchResults.filter((item, i) => i !== index);
      this.setState({ searchResults: reducedArray });
    });
    this.state.socket.emit("saved", "a user just saved: " + title);
  };

  setPublishedDate = publishedDate => {
    console.log(publishedDate);
    return moment(publishedDate)
      .add(6, "hour")
      .year();
  };

  render() {
    return (
      <Container>
        <FlexRow>
          <SearchField name="title" label="Title" onChange={this.handleInputChange} />
          <SearchField name="author" label="Author" onChange={this.handleInputChange} />
          <LightButton onClick={this.handleSubmit}>Search</LightButton>
        </FlexRow>
        <FlexColumn>
          {this.state.searchResults.map((item, index) => {
            return (
              <BookCard
                key={item.id}
                title={item.volumeInfo.title}
                description={
                  item.volumeInfo.description
                    ? item.volumeInfo.description
                    : "Well that's embarassing. This result has no description. You can try following the link to get a description."
                }
                publishedDate={this.setPublishedDate(item.volumeInfo.publishedDate)}
                link={item.volumeInfo.previewLink}
                authors={item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "No Authors Provided"}
                image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/128x192?text=no+thumbnail"}
                index={index}
                buttonText={"Save"}
                clickFunction={this.handleItemSave}
              ></BookCard>
            );
          })}
        </FlexColumn>
      </Container>
    );
  }
}

export default Search;
