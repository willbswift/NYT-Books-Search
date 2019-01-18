import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: "", description: "", image: "",
        link: ""})
      )
      .catch(err => console.log(err));
  };
  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state) //check
    if (this.state.title && this.state.authors) {
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
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.authors}
                onChange={this.handleInputChange}
                name="authors"
                placeholder="Author(s) (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image Link"
              />
              <Input
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="Link Address to more Info (required)"
              />
              <FormBtn
                disabled={!(this.state.authors && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>            
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <p>
                      {book.image ? 
                      <img src={book.image} alt="Book Cover" /> : '' }
                      <h2>
                        <strong> {book.title} </strong> 
                        by {book.authors}
                      </h2>
                      <h3>by {book.authors}</h3>
                      <a href={book.previewLink} target="_blank">More Info On Book</a>
                      <article>
                        <h3>Synopsis</h3>
                        <p>{book.description}</p>
                      </article> 
                    </p>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
