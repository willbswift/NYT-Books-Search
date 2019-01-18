import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import SearchFormG from "../SearchFormG";
// import BookDetail from "../BookDetail";
import API from "../../utils/API";
      // import DeleteBtn from "../DeleteBtn";
      // import { Col, Row, Container } from "../Grid";
      // import { List, ListItem } from "../List";
      import { Input, TextArea } from "../Form";
      import { FormBtn2 } from "../Form";
      // import { Link } from "react-router-dom";

class GoogleContainer extends Component {
  state = {
    result: [],
    search: ""
    // books: [],
    // title: "",
    // authors: "",
    // description: "",
    // image: "",
    // link: ""
  };

  // When this component mounts, search for the book "Foundation"
  componentDidMount() {
    this.searchBooks("Foundation");
  }

  searchBooks = query => {
    API.searchGoogle(query)
      .then(res => {
        console.log(res);
        this.setState({ result: res.data.items })
      }).catch(err => console.log(err));
  };

  // Triggers the collection for Google Books API??
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Google Books API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

    // Triggers the triggers the addition of the book to the database??
  handleInputChange2 = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    // When the form is submitted, saves the selected book to the database
  handleFormSubmit2 = theBook => {
    console.log(theBook)
    if (theBook.volumeInfo.title && theBook.volumeInfo.authors) {
      console.log("This if statement is ok");
      API.saveBook({
        title: theBook.volumeInfo.title,
        authors: theBook.volumeInfo.authors[0],
        description: theBook.volumeInfo.description,
        image: theBook.volumeInfo.imageLinks.thumbnail,
        link: theBook.volumeInfo.previewLink
      })
        // .then(res => this.loadBooks()) 
        // console.log(res)
        .catch(err => console.log(err));
    } else {
      console.log("Didn't work");
    }
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        <Row>
          <Jumbotron>
              <h1>NYT Google Book Search</h1>
          </Jumbotron>
          <Col size="md-8">
          {this.state.result.map(item => {
            return <Card key={item.id}>
            {item.volumeInfo.imageLinks ? <img    
            src={item.volumeInfo.imageLinks.thumbnail} alt="Book Cover" /> : '' }
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
              <FormBtn2
                disabled={!(this.state.authors && this.state.title)}
                handleFormSubmit2={() => this.handleFormSubmit2(item)}
              >
                Submit Book
              </FormBtn2>    
            </Card> 
          })} 
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
