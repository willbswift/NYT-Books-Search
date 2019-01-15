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
              <img src={item.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
              <h2>
                {item.volumeInfo.title} 
              </h2>
              <h3>by {item.volumeInfo.authors}</h3>
              <a href={item.volumeInfo.previewLink} target="_blank">More Info On Book</a>
              <article>
                <h3>Synopsis</h3>
                <p>
                  {item.volumeInfo.description}
                </p>
              </article>  
            </Card> 
          })} : (
            <h3>No Results to Display</h3>
          )     
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
