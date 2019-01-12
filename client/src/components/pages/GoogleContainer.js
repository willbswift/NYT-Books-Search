import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import SearchFormG from "../SearchFormG";
import BookDetail from "../BookDetail";
import API from "../../utils/API";

class GoogleContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the book "Foundation"
  componentDidMount() {
    this.searchBooks("Foundation");
  }

  searchBooks = query => {
    API.searchGoogle(query)
      .then(res => {
        // console.log(res);
        this.setState({ result: res.data.items })
      }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        <Row>
          <Col size="md-8">
          {this.state.result.map(item => {
            return <Card key={item.title}>
            {item.volumeInfo.title}
            <p>item.description</p>
            <img src={item.src} />
            </Card> 
          })}
            {/* <Card
              heading={this.state.result.Title || "Search for a Book to Begin"}
            >
              {this.state.result.Title ? (
                <BookDetail
                  title={this.state.result.items[0].volumeInfo.title}
                  src={this.state.result.items[0].volumeInfo.imageLinks.thumbnail}
                  authors={this.state.result.items[0].volumeInfo.authors}
                  link={this.state.result.items[0].selfLink}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card> */}
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchFormG
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleContainer;
