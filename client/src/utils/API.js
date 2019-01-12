import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

const BASEURL1 = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY1 = "&callback=handleResponse";

// const APIKEY2 = "key=AIzaSyAjP3iFTselHae7iJsXpO8Jj_d4wFVOVxg";

// https://www.googleapis.com/demo/v1?key=AIzaSyAjP3iFTselHae7iJsXpO8Jj_d4wFVOVxg
// https://www.googleapis.com/books?q=flowers+inauthor:keyes&key=AIzaSyAjP3iFTselHae7iJsXpO8Jj_d4wFVOVxg

// https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  
  //OMDB search
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  //Google Book search
  searchGoogle: function(query) {
    return axios.get(BASEURL1 + query);
  }
};


