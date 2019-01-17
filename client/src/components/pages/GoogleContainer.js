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
  handleFormSubmit2 = event => {
    event.preventDefault();
    console.log("submit button triggered") //check
    console.log(this.state) 
      // THE NEXT PROBLEM TO TACKEL IS IN THIS LINE BELOW
    if (this.state.result.volumeInfo.title && this.state.result.volumeInfo.authors) {
      console.log("This if statement is ok");
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      })
        .then(res => this.loadBooks()) //console.log(res)
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
          {this.state.result.map(items => {
            return <Card key={items.id}>
            {items.volumeInfo.imageLinks ? <img 
            
              value={this.state.image}
              onChange={this.handleInputChange2}
              name="image"
                        
            src={items.volumeInfo.imageLinks.thumbnail} alt="Book Cover" /> : '' }
              <h2 
                
                value={this.state.title}
                onChange={this.handleInputChange2}
                name="title"
                
                >
                {items.volumeInfo.title} 
              </h2>
              <h3
              
                value={this.state.authors}
                onChange={this.handleInputChange2}
                name="authors"            
              
              >by {items.volumeInfo.authors}</h3>
              <a 
              
                value={this.state.link}
                onChange={this.handleInputChange2}
                name="link"
              
              href={items.volumeInfo.previewLink} target="_blank">More Info On Book</a>
              <article>
                <h3>Synopsis</h3>
                <p
                
                  value={this.state.description}
                  onChange={this.handleInputChange2}
                  name="description"
                
                >
                  {items.volumeInfo.description}
                </p>
              </article> 
              <FormBtn2
                disabled={!(this.state.authors && this.state.title)}
                handleFormSubmit2={this.handleFormSubmit2}
              >
                Submit Book
              </FormBtn2>    
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
